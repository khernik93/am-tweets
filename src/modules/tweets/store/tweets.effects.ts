import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';

import { TweetsActionTypes, GetTweetsError, GetTweetsSuccess, SetTweets } from './tweets.actions';
import { Tweet } from '../../../shared/clients/backend/models/tweet.model';
import { BackendClient } from '../../../shared/clients/backend/backend.client';

@Injectable()
export class TweetsEffects {

  @Effect()
  getTweetsByHashtag$: Observable<any> = this.actions$
    .pipe(
      ofType(TweetsActionTypes.GetTweetsByHashtag),
      exhaustMap((action: any) => (
        this.apiClient.getTweetsByHashtag(action.hashtag)
          .pipe(
            map((tweets: Tweet[]) => (
              new GetTweetsSuccess(tweets)
            )),
            catchError(() => Observable.of(new GetTweetsError()))
          )
      ))
    );

  @Effect()
  getTweetsByUser$: Observable<any> = this.actions$
    .pipe(
      ofType(TweetsActionTypes.GetTweetsByUser),
      exhaustMap((action: any) => (
        this.apiClient.getTweetsByUser(action.user)
          .pipe(
            tap(tweets => console.log(tweets)),
            map((tweets: Tweet[]) => (
              new GetTweetsSuccess(tweets)
            )),
            catchError(() => Observable.of(new GetTweetsError()))
          )
      ))
    );

  @Effect()
  getTweetsSuccess$: Observable<any> = this.actions$
      .pipe(
        ofType(TweetsActionTypes.GetTweetsSuccess),
        map((action: any) => new SetTweets(action.tweets))
      );

  constructor(
    private actions$: Actions,
    private apiClient: BackendClient
  ) { }

}
