import { createSelector } from '@ngrx/store';

import { AppState } from '../../../store/app.reducers';
import { selectApp } from '../../../store/app.selectors';

export const selectInput = createSelector(
  selectApp,
  (state: AppState) => state.search.input
);

export const selectSearchType = createSelector(
  selectApp,
  (state: AppState) => state.search.searchType
);
