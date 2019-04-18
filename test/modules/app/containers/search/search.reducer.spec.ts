import { searchReducer, initialState } from '../../../../../src/modules/app/containers/search/store/search.reducer';
import * as searchActions from '../../../../../src/modules/app/containers/search/store/search.actions';

describe('NotificationReducer', () => {

  it(`
    WHEN SetInput action is dispatched
    THEN correct state is returned
  `, () => {
    const input = 'sample-message';
    const action = new searchActions.SetInput(input);
    const result = searchReducer(initialState, action);
    expect(result).toEqual({ ...initialState, input });
  });

  it(`
    WHEN SetSearchType action is dispatched
    THEN correct state is returned
  `, () => {
    const searchType = 'hashtags';
    const action = new searchActions.SetSearchType(searchType);
    const result = searchReducer(initialState, action);
    expect(result).toEqual({ ...initialState, searchType });
  });

  it(`
    WHEN ClearInput action is dispatched
    THEN initialState is returned
  `, () => {
    const action = new searchActions.ClearInput();
    const result = searchReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it(`
    WHEN different action is dispatched
    THEN the state is passed on
  `, () => {
    const action = {};
    const result = searchReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

});
