import { SearchActions, SearchActionTypes } from './search.actions';

export interface SearchState {
  input: string;
  searchType: string
};

export const initialState: SearchState = {
  input: null,
  searchType: null
};

export function searchReducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {

    case SearchActionTypes.SetInput:
      return { ...state, input: action.input };

    case SearchActionTypes.SetSearchType:
      return { ...state, searchType: action.searchType };

    case SearchActionTypes.ClearInput:
      return initialState;

    default: {
      return state;
    }

  }
}
