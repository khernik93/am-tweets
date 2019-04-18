import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import cloneDeep from 'lodash-es/cloneDeep';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedStubs } from '../../../../utils/stubs/sharedStubs';
import { MockStore } from '../../../../utils/mocks/mockStore';
import { State } from '../../../../utils/state/state';
import { AppState } from '../../../../../src/modules/app/store/app.reducers';
import { NotificationContainer } from '../../../../../src/modules/app/containers/notification/notification.container';

describe('NotificationContainer', () => {

  let store: MockStore<AppState>;
  
  let component: NotificationContainer;
  let fixture: ComponentFixture<NotificationContainer>;

  beforeEach(() => {
    store = SharedStubs.getMockStoreStub<AppState>();

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NotificationContainer],
      providers: [
        { provide: Store, useValue: store }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationContainer);
    component = fixture.componentInstance;
    store.setState(cloneDeep(State));
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should check if the component is defined', () => {
    expect(component).toBeDefined();
  });

});
