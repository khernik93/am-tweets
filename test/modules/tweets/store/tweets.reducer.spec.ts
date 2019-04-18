import { tweetsReducer, initialState } from '../../../../src/modules/tweets/store/tweets.reducer';
import * as tweetsActions from '../../../../src/modules/tweets/store/tweets.actions';
import { TweetsResponse } from '../../../utils/responses/tweets.response';

describe('TweetsReducer', () => {

  it(`
    WHEN GetTweetsByHashtag action is dispatched
    OR GetTweetsByUser action is dispatched
    THEN correct state is returned
  `, () => {
    const hashtagAction = new tweetsActions.GetTweetsByHashtag('hashtag');
    const userAction = new tweetsActions.GetTweetsByUser('user');

    let result = tweetsReducer(initialState, hashtagAction);
    expect(result).toEqual({ ...initialState, loading: true });

    result = tweetsReducer(initialState, userAction);
    expect(result).toEqual({ ...initialState, loading: true });
  });

  it(`
    WHEN SetTweets action is dispatched
    THEN correct state is returned
  `, () => {
    const action = new tweetsActions.SetTweets(TweetsResponse);
    const result = tweetsReducer(initialState, action);
    expect(result).toEqual({ ...initialState, tweets: TweetsResponse });
  });

  it(`
    WHEN GetTweetsSuccess action is dispatched
    OR GetTweetsError action is dispatched
    THEN correct state is returned
  `, () => {
    const successAction = new tweetsActions.GetTweetsSuccess(null);
    const errorAction = new tweetsActions.GetTweetsError();

    let result = tweetsReducer(initialState, successAction);
    expect(result).toEqual({ ...initialState, loading: false });

    result = tweetsReducer(initialState, errorAction);
    expect(result).toEqual({ ...initialState, loading: false });
  });

  it(`
    WHEN ClearTweets action is dispatched
    THEN correct state is returned
  `, () => {
    const action = new tweetsActions.ClearTweets();
    const result = tweetsReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  it(`
    WHEN different action is dispatched
    THEN the state is passed on
  `, () => {
    const action = {};
    const result = tweetsReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

});
