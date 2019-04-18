import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { SetInput } from './store/search.actions';
import { selectInput, selectSearchType } from './store/search.selectors';
import { AppState } from '../../store/app.reducers';
import { initialState } from './store/search.reducer';

@Component({
  selector: 'search-container',
  templateUrl: './search.container.html'
})
export class SearchContainer implements OnInit, OnDestroy {

  input$: Observable<string>;
  searchType$: Observable<string>;
  searchReset$ = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>
  ) { 
    this.input$ = this.store.select(selectInput);
    this.searchType$ = this.store.select(selectSearchType);
  }

  ngOnInit() {
    this.sendSearchResetEventOnInputReset();
  }

  sendSearchResetEventOnInputReset() {
    this.input$
      .pipe(
        takeUntil(this.destroy$),
        filter((input: string) => !input)
      )
      .subscribe(() => {
        this.searchReset$.emit();
      });
  }

  search(input: string) {
    this.store.dispatch(new SetInput(input));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}
