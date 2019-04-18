/* istanbul ignore file */
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetsComponent { }
