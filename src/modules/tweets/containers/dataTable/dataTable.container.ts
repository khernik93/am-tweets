import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Tweet } from '../../../../shared/clients/backend/models/tweet.model';
import { TweetsState } from '../../store/tweets.reducer';
import { selectTweets, selectIsLoading } from '../../store/tweets.selectors';
import { AppState } from '../../../app/store/app.reducers';
import { ClearTweets } from '../../store/tweets.actions';
import { ClearInput } from '../../../app/containers/search/store/search.actions';

@Component({
  selector: 'dataTable-container',
  templateUrl: './dataTable.container.html'
})
export class DataTableContainer implements OnDestroy {

  tweets$: Observable<Tweet[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<TweetsState | AppState>
  ) { 
    this.tweets$ = this.store.select(selectTweets);
    this.loading$ = this.store.select(selectIsLoading);
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearInput());
    this.store.dispatch(new ClearTweets());
  }

}
