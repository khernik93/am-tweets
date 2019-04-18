import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';

import { SearchComponent } from '../../../../../src/modules/app/components/search/search.component';

describe('SearchComponent', () => {
  
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SearchComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.searchReset$ = Observable.empty();
  });

  it('should check if the component is defined', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it(`
    WHEN form is submitted
    THEN search function is called
  `, () => {
    fixture.detectChanges();
    spyOn(component.onSearch, 'emit').and.callThrough();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component.onSearch.emit).toHaveBeenCalled();
  });

});
