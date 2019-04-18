import { Routes } from '@angular/router';
import { LayoutComponent } from '../../app/components/layout/layout.component';
import { HashtagsContainer } from '../containers/hashtags/hashtags.container';
import { UsersContainer } from '../containers/users/users.container';

export const tweetsRoutesTree: Routes = [
  {
    path: 'tweets',
    component: LayoutComponent,
    children: [
      { path: 'hashtags', component: HashtagsContainer, pathMatch: 'full' },
      { path: 'users', component: UsersContainer, pathMatch: 'full' }
    ]
  },
];

export type TweetsRoutes = {
  
};

export const tweetsRoutes: TweetsRoutes = {

};
