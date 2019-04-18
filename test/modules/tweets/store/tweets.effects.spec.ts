import { Actions } from '@ngrx/effects';
import { TestBed } from '@angular/core/testing';
import { hot, cold } from 'jasmine-marbles';
import cloneDeep from 'lodash-es/cloneDeep';
import { Store } from '@ngrx/store';

import { TweetsEffects } from '../../../../src/modules/tweets/store/tweets.effects';
import { BackendClient } from '../../../../src/shared/clients/backend/backend.client';
import { MockStore } from '../../../utils/mocks/mockStore';
import { TestActions, getActions } from '../../../utils/mocks/testActions';
import { TweetsState } from '../../../../src/modules/tweets/store/tweets.reducer';
import { SharedStubs } from '../../../utils/stubs/sharedStubs';
import { Tweet } from '../../../../src/shared/clients/backend/models/tweet.model';
import { TweetsResponse } from '../../../utils/responses/tweets.response';
import { GetTweetsByHashtag, GetTweetsSuccess, GetTweetsError, GetTweetsByUser, SetTweets } from '../../../../src/modules/tweets/store/tweets.actions';

describe('TweetsEffects', () => {

  let apiClient: jasmine.SpyObj<BackendClient>;
  let store: MockStore<TweetsState>;

  let actions: TestActions;
  let effects: TweetsEffects;
  let ClonedTweetsResponse: Tweet[];

  beforeEach(() => {
    store = SharedStubs.getMockStoreStub<TweetsState>();
    apiClient = SharedStubs.getBackendClientStub();

    TestBed.configureTestingModule({
      providers: [
        TweetsEffects,
        { provide: Actions, useFactory: getActions },
        { provide: BackendClient, useValue: apiClient },
        { provide: Store, useValue: store }
      ]
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(TweetsEffects);
  });

  beforeEach(() => {
    ClonedTweetsResponse = cloneDeep(TweetsResponse);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it(`
    WHEN GetTweetsByHashtag action is dispatched
    THEN GetTweetsSuccess is dispatched with fetched tweets
  `, () => {
    const hashtag = 'test';
    const action = new GetTweetsByHashtag(hashtag);
    const outcome = new GetTweetsSuccess(ClonedTweetsResponse);

    actions.stream = hot('-a', {a: action});
    const response = cold('-a|', { a: ClonedTweetsResponse });
    const expected = cold('--b', { b: outcome });
    spyOn(store, 'select').and.returnValue(response);
    apiClient.getTweetsByHashtag.and.returnValue(response);
    expect(effects.getTweetsByHashtag$).toBeObservable(expected);
  });

  it(`
    WHEN GetTweetsByHashtag action is dispatched with error
    THEN GetTweetsError is dispatched
  `, () => {
    const hashtag = 'test';
    const action = new GetTweetsByHashtag(hashtag);
    const outcome = new GetTweetsError();

    actions.stream = hot('-a', {a: action});
    const errorResponse = cold('-#|', {}, 'error');
    const expected = cold('--b', { b: outcome });
    apiClient.getTweetsByHashtag.and.returnValue(errorResponse);
    expect(effects.getTweetsByHashtag$).toBeObservable(expected);
  });

  it(`
    WHEN GetTweetsByUser action is dispatched
    THEN GetTweetsSuccess is dispatched with fetched tweets
  `, () => {
    const user = 'test';
    const action = new GetTweetsByUser(user);
    const outcome = new GetTweetsSuccess(ClonedTweetsResponse);

    actions.stream = hot('-a', {a: action});
    const response = cold('-a|', { a: ClonedTweetsResponse });
    const expected = cold('--b', { b: outcome });
    spyOn(store, 'select').and.returnValue(response);
    apiClient.getTweetsByUser.and.returnValue(response);
    expect(effects.getTweetsByUser$).toBeObservable(expected);
  });

  it(`
    WHEN GetTweetsByUser action is dispatched with error
    THEN GetTweetsError is dispatched
  `, () => {
    const user = 'test';
    const action = new GetTweetsByUser(user);
    const outcome = new GetTweetsError();

    actions.stream = hot('-a', {a: action});
    const errorResponse = cold('-#|', {}, 'error');
    const expected = cold('--b', { b: outcome });
    apiClient.getTweetsByUser.and.returnValue(errorResponse);
    expect(effects.getTweetsByUser$).toBeObservable(expected);
  });

  it(`
    WHEN GetTweetsSuccess action is dispatched
    THEN SetTweets is dispatched with passed of tweets
  `, () => {
    const user = 'test';
    const action = new GetTweetsSuccess(ClonedTweetsResponse);
    const outcome = new SetTweets(ClonedTweetsResponse);

    actions.stream = hot('-a', {a: action});
    const response = cold('-a|', { a: ClonedTweetsResponse });
    const expected = cold('--b', { b: outcome });
    spyOn(store, 'select').and.returnValue(response);
    expect(effects.getTweetsSuccess$).toBeObservable(expected);
  });

});
