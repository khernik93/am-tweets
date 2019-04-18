import { AppState } from '../../../src/modules/app/store/app.reducers';
import { NotificationType } from '../../../src/modules/app/containers/notification/model/notification.model';
import { TweetsState } from '../../../src/modules/tweets/store/tweets.reducer';
import { TweetsResponse } from '../responses/tweets.response';

export const State: {
  app: AppState,
  tweets: TweetsState
} = {
  app: {
    router: null,
    notification: {
      notification: {
        message: 'first notification',
        type: NotificationType.error
      }
    },
    search: {
      input: 'Python',
      searchType: 'hashtags'
    }
  },
  tweets: {
    tweets: TweetsResponse,
    loading: false
  }
};
