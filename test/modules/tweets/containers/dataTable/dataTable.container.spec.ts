import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import cloneDeep from 'lodash-es/cloneDeep';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedStubs } from '../../../../utils/stubs/sharedStubs';
import { MockStore } from '../../../../utils/mocks/mockStore';
import { State } from '../../../../utils/state/state';
import { TweetsState } from '../../../../../src/modules/tweets/store/tweets.reducer';
import { DataTableContainer } from '../../../../../src/modules/tweets/containers/dataTable/dataTable.container';

describe('DataTableContainer', () => {

  let store: MockStore<TweetsState>;
  
  let component: DataTableContainer;
  let fixture: ComponentFixture<DataTableContainer>;

  beforeEach(() => {
    store = SharedStubs.getMockStoreStub<TweetsState>();

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DataTableContainer],
      providers: [
        { provide: Store, useValue: store }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableContainer);
    component = fixture.componentInstance;
    store.setState(cloneDeep(State));
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should check if the component is defined', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it(`
    WHEN component is destroyed
    THEN dispatch is called twice
  `, () => {
    fixture.destroy();
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

});
