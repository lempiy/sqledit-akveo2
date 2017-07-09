import { Component } from '@angular/core';

import { TableViewsService } from './tableViews.service';

@Component({
  selector: 'table-views',
  templateUrl: './tableViews.html',
  styleUrls: ['./tableViews.scss']
})
export class TableViews {

  query: string = '';

  allViewData: any[];

  constructor(protected service: TableViewsService) {
    this.service.getData('user').then((data) => {
      this.allViewData = data;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
