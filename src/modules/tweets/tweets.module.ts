/* istanbul ignore file */
// Global
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { TweetsComponent } from './tweets.component';
import { TweetsRoutingModule } from './routing/tweetsRouting.module';
import { TweetsEffects } from './store/tweets.effects';
import { tweetsReducer } from './store/tweets.reducer';
import { HashtagsContainer } from './containers/hashtags/hashtags.container';
import { UsersContainer } from './containers/users/users.container';
import { DataTableComponent } from './components/dataTable/dataTable.component';
import { DataTableContainer } from './containers/dataTable/dataTable.container';

export const MODULE_DECLARATIONS = [
  TweetsComponent,
  HashtagsContainer,
  UsersContainer,
  DataTableComponent,
  DataTableContainer
];

export const MODULE_IMPORTS = [
  CommonModule,
  NgxPaginationModule
];

export const ROUTING_MODULE_IMPORTS = [
  TweetsRoutingModule
];

const STORE_IMPORTS = [
  StoreModule.forFeature('tweets', tweetsReducer),
  EffectsModule.forFeature([TweetsEffects])
];

@NgModule({
  declarations: [
    ...MODULE_DECLARATIONS
  ],
  imports: [
    ...MODULE_IMPORTS,
    ...ROUTING_MODULE_IMPORTS,
    ...STORE_IMPORTS
  ],
  providers: []
})
export class TweetsModule {
  constructor() { }
}
