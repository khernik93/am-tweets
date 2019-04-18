import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Tweet } from '../../../../shared/clients/backend/models/tweet.model';

@Component({
  selector: 'dataTable-component',
  templateUrl: './dataTable.component.html',
  styleUrls: ['./dataTable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent {

  @Input() tweets$: Observable<Tweet[]>;
  @Input() loading$: Observable<boolean>;

  p: number = 1;

  fetchDayFromDate(date: string) {
    const parts = date.split('-');
    return parts[1] || '';
  }

}
