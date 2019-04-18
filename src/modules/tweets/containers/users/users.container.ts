import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs/operators';

import { selectInput } from '../../../app/containers/search/store/search.selectors';
import { AppState } from '../../../app/store/app.reducers';
import { GetTweetsByUser } from '../../store/tweets.actions';
import { SetSearchType } from '../../../app/containers/search/store/search.actions';
import { SearchService } from '../../../app/containers/search/search.service';

@Component({
  selector: 'users-container',
  templateUrl: './users.container.html'
})
export class UsersContainer implements OnInit, OnDestroy {

  searchInput$: Observable<string>;
  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>
  ) { 
    this.searchInput$ = this.store.select(selectInput);
  }

  ngOnInit() {
    this.setSearchType();
    this.listenToSearchStringChanges();
  }

  setSearchType() {
    const searchType = SearchService.searchTypes.users;
    this.store.dispatch(new SetSearchType(searchType));
  }

  listenToSearchStringChanges() {
    this.searchInput$
      .pipe(
        takeUntil(this.destroy$),
        filter(results => !!results)
      )
      .subscribe((searchInput: string) => {
        this.store.dispatch(new GetTweetsByUser(searchInput));
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
