import { Observable } from 'rxjs';

import { MockStore } from '../mocks/mockStore';
import { BackendClient } from '../../../src/shared/clients/backend/backend.client';
import { TweetsResponse } from '../responses/tweets.response';

export class SharedStubs {

  static getBackendClientStub(): jasmine.SpyObj<BackendClient> {
    return jasmine.createSpyObj('BackendClient', {
      'getTweetsByHashtag': Observable.of(TweetsResponse),
      'getTweetsByUser': Observable.of(TweetsResponse)
    });
  }

  static getMockStoreStub<T>(): MockStore<T> {
    return new MockStore<T>();
  }

}
