import { selectNotification } from '../../../../../src/modules/app/containers/notification/store/notification.selectors';
import { State } from '../../../../utils/state/state';

describe('NotificationSelectors', () => {

  it(`
    WHEN selectNotification is called
    THEN notification is selected
  `, () => {
    expect(selectNotification(State.app)).toEqual(State.app.notification.notification);
  });

});
