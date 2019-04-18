import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TweetsState } from './tweets.reducer';

const tweets = createFeatureSelector<TweetsState>('tweets');

export const selectTweets = createSelector(
  tweets,
  (state: TweetsState) => state.tweets
);

export const selectIsLoading = createSelector(
  tweets,
  (state: TweetsState) => state.loading
);
