import { Action } from '@ngrx/store';
import { Tweet } from '../../../shared/clients/backend/models/tweet.model';

export enum TweetsActionTypes {
  GetTweetsByHashtag = '[Tweets] Get tweets by hashtag',
  GetTweetsByUser = '[Tweets] Get tweets by user',
  GetTweetsSuccess = '[Tweets] Get tweets success',
  GetTweetsError = '[Tweets] Get tweets error',
  SetTweets = '[Tweets] Set tweets',
  ClearTweets = '[Tweets] Clear tweets'
}

export class GetTweetsByHashtag implements Action {
  readonly type = TweetsActionTypes.GetTweetsByHashtag;
  constructor(public hashtag: string) { }
}

export class GetTweetsByUser implements Action {
  readonly type = TweetsActionTypes.GetTweetsByUser;
  constructor(public user: string) { }
}

export class GetTweetsSuccess implements Action {
  readonly type = TweetsActionTypes.GetTweetsSuccess;
  constructor(public tweets: Tweet[]) { }
}

export class GetTweetsError implements Action {
  readonly type = TweetsActionTypes.GetTweetsError;
  constructor() { }
}

export class SetTweets implements Action {
  readonly type = TweetsActionTypes.SetTweets;
  constructor(public tweets: Tweet[]) { }
}

export class ClearTweets implements Action {
  readonly type = TweetsActionTypes.ClearTweets;
  constructor() { }
}

export type TweetsActions = GetTweetsByHashtag
  | GetTweetsByUser
  | GetTweetsSuccess
  | GetTweetsError
  | SetTweets
  | ClearTweets;
