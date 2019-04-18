import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/notFound/notFound.component';

export const appRoutesTree: Routes = [
  { 
    path: '', 
    redirectTo: '/tweets',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: NotFoundComponent
  }
];
