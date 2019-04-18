/* istanbul ignore file */
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { tweetsRoutesTree } from './tweetsRouting.routes';

@NgModule({
  imports: [RouterModule.forChild(tweetsRoutesTree)],
  exports: [RouterModule]
})
export class TweetsRoutingModule { }
