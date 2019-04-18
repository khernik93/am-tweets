/* istanbul ignore file */
// Global
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

// Store
import { syncReducers } from './store/app.reducers';

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { NotificationComponent } from './components/notification/notification.component';

// Modules
import { AppRoutingModule } from './routing/appRouting.module';

// Providers
import { TransferHttpService } from '../../shared/services/transferHttp.service';
import { BackendClient } from '../../shared/clients/backend/backend.client';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NotificationContainer } from './containers/notification/notification.container';
import { BackendService } from '../../shared/clients/backend/backend.service';
import { TweetsModule } from '../tweets/tweets.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchContainer } from './containers/search/search.container';
import { SearchComponent } from './components/search/search.component';

export const MODULE_DECLARATIONS = [
  NotFoundComponent,
  NotificationContainer,
  NotificationComponent,
  HeaderComponent,
  SearchContainer,
  SearchComponent
];

const LAYOUT_MODULE_DECLARATIONS = [
  AppComponent,
  LayoutComponent
];

export const MODULE_IMPORTS = [
  BrowserModule,
  HttpClientModule,
  ReactiveFormsModule
];

const ROOT_MODULE_IMPORTS = [
  TweetsModule
];

const ROUTING_MODULE_IMPORTS = [
  AppRoutingModule
];

const STORE_IMPORTS = [
  StoreModule.forRoot(syncReducers),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    maxAge: 10
  })
];

@NgModule({
  declarations: [
    ...MODULE_DECLARATIONS,
    ...LAYOUT_MODULE_DECLARATIONS
  ],
  imports: [
    ...MODULE_IMPORTS,
    ...ROOT_MODULE_IMPORTS,
    ...ROUTING_MODULE_IMPORTS,
    ...STORE_IMPORTS
  ],
  providers: [
    TransferHttpService,
    BackendClient,
    BackendService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {
  constructor() { }
}
