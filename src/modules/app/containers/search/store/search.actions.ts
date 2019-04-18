import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  SetInput = '[Search] Set input',
  SetSearchType = '[Search] Set search type',
  ClearInput = '[Search] Clear input'
}

export class SetInput implements Action {
  readonly type = SearchActionTypes.SetInput;
  constructor(public input: string) { }
}

export class SetSearchType implements Action {
  readonly type = SearchActionTypes.SetSearchType;
  constructor(public searchType: string) { }
}

export class ClearInput implements Action {
  readonly type = SearchActionTypes.ClearInput;
  constructor() { }
}

export type SearchActions = SetInput
  | SetSearchType
  | ClearInput;
