import { selectInput, selectSearchType } from '../../../../../src/modules/app/containers/search/store/search.selectors';
import { State } from '../../../../utils/state/state';

describe('SearchSelectors', () => {

  it(`
    WHEN selectInput is called
    THEN input is selected
  `, () => {
    expect(selectInput(State.app)).toEqual(State.app.search.input);
  });

  it(`
    WHEN selectSearchType is called
    THEN searchType is selected
  `, () => {
    expect(selectSearchType(State.app)).toEqual(State.app.search.searchType);
  });

});
