import { Component } from '@angular/core';

import { AllViewsService } from './allViews.service';

@Component({
  selector: 'all-views',
  templateUrl: './allViews.html',
  styleUrls: ['./allViews.scss']
})
export class AllViews {

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

  constructor(protected service: AllViewsService) {
    this.service.getData().then((data) => {
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
