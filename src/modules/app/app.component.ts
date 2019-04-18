/* istanbul ignore file */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app',
  styleUrls: [],
  template: `
    <router-outlet></router-outlet>
    <notification-container></notification-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
