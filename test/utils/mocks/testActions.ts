import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class TestActions extends Actions {
  
  constructor() {
    super(Observable.empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }

}

export function getActions() {
  return new TestActions();
}
