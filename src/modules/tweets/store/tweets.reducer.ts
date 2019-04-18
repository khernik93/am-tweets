import { Tweet } from '../../../shared/clients/backend/models/tweet.model';
import { TweetsActions, TweetsActionTypes } from './tweets.actions';
import { ActionReducerMap } from '@ngrx/store';

export interface TweetsState {
  tweets: Tweet[],
  loading: boolean
}

export const initialState: TweetsState = {
  tweets: [],
  loading: false
};

export function tweetsReducer(state = initialState, action: TweetsActions): TweetsState {
  switch (action.type) {

    case TweetsActionTypes.GetTweetsByHashtag:
    case TweetsActionTypes.GetTweetsByUser:
      return { ...state, loading: true }

    case TweetsActionTypes.SetTweets:
      return {
        ...state,
        tweets: action.tweets
      }

    case TweetsActionTypes.GetTweetsSuccess:
    case TweetsActionTypes.GetTweetsError:
      return { ...state, loading: false }

    case TweetsActionTypes.ClearTweets:
      return initialState;

    default: {
      return state;
    }
  }
}
