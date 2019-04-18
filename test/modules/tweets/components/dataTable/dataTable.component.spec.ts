import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import cloneDeep from 'lodash-es/cloneDeep';
import { NgxPaginationModule } from 'ngx-pagination';

import { DataTableComponent } from '../../../../../src/modules/tweets/components/dataTable/dataTable.component';
import { TweetsResponse } from '../../../../utils/responses/tweets.response';

describe('DataTableComponent', () => {
  
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxPaginationModule],
      declarations: [DataTableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    component.tweets$ = Observable.of(cloneDeep(TweetsResponse));
    component.loading$ = Observable.of(false);
    fixture.detectChanges();
  });

  it('should check if the component is defined', () => {
    expect(component).toBeDefined();
  });

  it(`
    WHEN data table is displayed
    THEN is has maximum number of 10 rows
  `, () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toEqual(10);
  });

  it(`
    WHEN fetchDayFromDate is called
    THEN tweeter date is parsed correctly
  `, () => {
    const date = '7:29 AM - 12 Apr 2019';
    const actual = component.fetchDayFromDate(date);
    expect(actual).toEqual('12 Apr 2019');
  });

  it(`
    WHEN fetchDayFromDate is called with wrong date
    THEN empty string is returned
  `, () => {
    const date = '7:29 AM 12 Apr 2019';
    const actual = component.fetchDayFromDate(date);
    expect(actual).toEqual('');
  });

});
