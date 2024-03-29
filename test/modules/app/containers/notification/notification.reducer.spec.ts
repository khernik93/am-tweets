import { notificationReducer, initialState } from '../../../../../src/modules/app/containers/notification/store/notification.reducer';
import * as notificationActions from '../../../../../src/modules/app/containers/notification/store/notification.actions';
import { Notification, NotificationType } from '../../../../../src/modules/app/containers/notification/model/notification.model';

describe('NotificationReducer', () => {

  it(`
    WHEN SetError action is dispatched with notification
    THEN the notification with error type is stored in the store
  `, () => {
    const action = new notificationActions.SetError('sample-message');
    Helper.assertNotification(action, {
      type: NotificationType.error,
      message: 'sample-message'
    });
  });

  it(`
    WHEN SetError action is dispatched with notification
    THEN the notification with error type is stored in the store
  `, () => {
    const action = new notificationActions.SetSuccess('sample-message');
    Helper.assertNotification(action, {
      type: NotificationType.success, 
      message: 'sample-message'
    });
  });

  it(`
    WHEN different action is dispatched with notification
    THEN the state is passed on
  `, () => {
    const action = {};
    Helper.assertNotification(action, initialState.notification);
  });

  class Helper {

    static assertNotification (action: any, expectedNotification: Notification): void {
      const result = notificationReducer(initialState, action);
      expect(result).toEqual({
        ...initialState,
        notification: expectedNotification
      });
    }

  }

});
