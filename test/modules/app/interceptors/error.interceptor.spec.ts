import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

import { ErrorInterceptor } from '../../../../src/modules/app/interceptors/error.interceptor';

describe('ErrorInterceptor', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
      }]
    });
  });

});
