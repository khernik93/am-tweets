import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import cloneDeep from 'lodash-es/cloneDeep';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedStubs } from '../../../../utils/stubs/sharedStubs';
import { MockStore } from '../../../../utils/mocks/mockStore';
import { State } from '../../../../utils/state/state';
import { AppState } from '../../../../../src/modules/app/store/app.reducers';
import { SearchContainer } from '../../../../../src/modules/app/containers/search/search.container';
import { SetInput } from '../../../../../src/modules/app/containers/search/store/search.actions';

describe('SearchContainer', () => {

  let store: MockStore<AppState>;
  
  let component: SearchContainer;
  let fixture: ComponentFixture<SearchContainer>;

  beforeEach(() => {
    store = SharedStubs.getMockStoreStub<AppState>();

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SearchContainer],
      providers: [
        { provide: Store, useValue: store }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainer);
    component = fixture.componentInstance;
    component.input$ = Observable.of('');
    store.setState(cloneDeep(State));
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should check if the component is defined', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it(`
    WHEN component is initialized
    THEN sendSearchResetEventOnInputReset is called
  `, () => {
    spyOn(component, 'sendSearchResetEventOnInputReset').and.returnValue(null);
    fixture.detectChanges();
    expect(component.sendSearchResetEventOnInputReset).toHaveBeenCalled();
  });

  it(`
    WHEN seach event is fired
    THEN SetInput action is dispatched
  `, () => {
    const val = 'value';
    component.search(val);
    expect(store.dispatch).toHaveBeenCalledWith(new SetInput(val));
  });

});
