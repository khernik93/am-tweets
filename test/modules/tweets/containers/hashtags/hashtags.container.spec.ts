import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import cloneDeep from 'lodash-es/cloneDeep';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedStubs } from '../../../../utils/stubs/sharedStubs';
import { MockStore } from '../../../../utils/mocks/mockStore';
import { State } from '../../../../utils/state/state';
import { TweetsState } from '../../../../../src/modules/tweets/store/tweets.reducer';
import { HashtagsContainer } from '../../../../../src/modules/tweets/containers/hashtags/hashtags.container';
import { SetSearchType } from '../../../../../src/modules/app/containers/search/store/search.actions';
import { SearchService } from '../../../../../src/modules/app/containers/search/search.service';
import { GetTweetsByHashtag } from '../../../../../src/modules/tweets/store/tweets.actions';

describe('HashtagsContainer', () => {

  const SEARCH_INPUT = 'lorem ipsum';

  let store: MockStore<TweetsState>;
  
  let component: HashtagsContainer;
  let fixture: ComponentFixture<HashtagsContainer>;

  beforeEach(() => {
    store = SharedStubs.getMockStoreStub<TweetsState>();

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HashtagsContainer],
      providers: [
        { provide: Store, useValue: store }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagsContainer);
    component = fixture.componentInstance;
    component.searchInput$ = Observable.of(SEARCH_INPUT);
    store.setState(cloneDeep(State));
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should check if the component is defined', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it(`
    WHEN component is initialized
    THEN setSearchType is called
    AND listenToSearchStringChanges is called
  `, () => {
    spyOn(component, 'setSearchType').and.returnValue(null);
    spyOn(component, 'listenToSearchStringChanges').and.returnValue(null);
    fixture.detectChanges();
    expect(component.setSearchType).toHaveBeenCalled();
    expect(component.listenToSearchStringChanges).toHaveBeenCalled();
  });

  it(`
    WHEN setSearchType is called
    THEN SetSearchType is dispatched with correct type
  `, () => {
    component.setSearchType();
    expect(store.dispatch).toHaveBeenCalledWith(new SetSearchType(SearchService.searchTypes.hashtags));
  });

  it(`
    WHEN searchInput$ emits new value
    THEN GetTweetsByHashtag is dispatched with emitted value
  `, () => {
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new GetTweetsByHashtag(SEARCH_INPUT));
  });

});
