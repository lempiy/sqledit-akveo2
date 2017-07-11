import { Component } from '@angular/core';

import { TableViewsService } from './tableViews.service';

@Component({
  selector: 'table-views',
  templateUrl: './tableViews.html',
  styleUrls: ['./tableViews.scss']
})
export class TableViews {

  query: string = '';

    result: any = {
    status: '',
    violations: [],
    message: '',
  };

  clearResult() {
    this.result = {
      status: '',
      violations: [],
      message: '',
    };
  } 

  allViewData: any[];

  constructor(protected service: TableViewsService) {
    this.service.getData('user').then((data) => {
      this.allViewData = data;
    });
  }

  deleteView($event) {
    this.allViewData.splice(
      this.allViewData.findIndex(view => view.name === $event.name), 
    1);
    Object.assign(this.result, {
      status: 'success',
      message: `View ${$event.name} was deleted.`,
    })
  }
}
