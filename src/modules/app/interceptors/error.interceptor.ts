import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducers';
import { SetError } from '../containers/notification/store/notification.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private errorMessage: string = 'Oops, something went terribly wrong!';

  constructor(
    private store: Store<AppState>
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: any) => {
          this.dispatchSpecificActions(error.status);
          return Observable.throw(error);
        })
      );
  }

  private dispatchSpecificActions(status: number) {
    if (this.isError(status)) {
      this.store.dispatch(new SetError(this.errorMessage));
    }
  }

  private isError(status: number) {
    return status === 0 || status >= 400;
  }

}
