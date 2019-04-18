import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy { 

  @Input() searchReset$: Observable<void>;
  @Input() searchType$: Observable<string>;
  @Output() onSearch = new EventEmitter<string>();

  searchForm: FormGroup;

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.buildSearchForm();
    this.watchForSearchReset();
  }

  buildSearchForm() {
    this.searchForm = new FormGroup({
      input: new FormControl('', Validators.required)
    });
  }

  watchForSearchReset() {
    this.searchReset$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.searchForm.reset();
      });
  }

  search() {
    this.onSearch.emit(this.searchForm.value.input);
    return false;
  }

  isInvalid(control: string): boolean {
    const isValid = this.searchForm.get(control).valid;
    const isTouched = this.searchForm.get(control).touched;
    return !isValid && isTouched;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
