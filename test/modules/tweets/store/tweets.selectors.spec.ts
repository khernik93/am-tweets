import { selectTweets, selectIsLoading } from '../../../../src/modules/tweets/store/tweets.selectors';
import { State } from '../../../utils/state/state';

describe('TweetsSelectors', () => {

  it(`
    WHEN selectTweets is called
    THEN tweets are selected
  `, () => {
    expect(selectTweets(State)).toEqual(State.tweets.tweets);
  });

  it(`
    WHEN selectIsLoading is called
    THEN isLoading is selected
  `, () => {
    expect(selectIsLoading(State)).toEqual(State.tweets.loading);
  });

});
