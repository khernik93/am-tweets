import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { selectSearchType } from '../../containers/search/store/search.selectors';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 

  searchType$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) {
    this.searchType$ = this.store.select(selectSearchType);
  }

}
