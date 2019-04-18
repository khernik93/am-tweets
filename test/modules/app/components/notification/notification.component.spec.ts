import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { MODULE_DECLARATIONS, MODULE_IMPORTS } from '../../../../../src/modules/app/app.module';
import { NotificationComponent } from '../../../../../src/modules/app/components/notification/notification.component';
import { State } from '../../../../utils/state/state';
import { MockElementRef } from '../../../../utils/mocks/mockElementRef';

describe('NotificationComponent', () => {

  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: MODULE_IMPORTS,
      declarations: MODULE_DECLARATIONS
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    component.el = new MockElementRef();
    component.notification$ = Observable.of(State.app.notification.notification);
  });

  it('should check if the component is defined', () => {
    expect(component).toBeDefined();
  });

  it(`
    WHEN component is initialized
    THEN restartAnimation is called
  `, () => {
    spyOn(component, 'restartAnimation').and.callThrough();
    fixture.detectChanges();
    expect(component.restartAnimation).toHaveBeenCalled();
  });

});
