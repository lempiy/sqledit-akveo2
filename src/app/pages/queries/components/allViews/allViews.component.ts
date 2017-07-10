import { Component } from '@angular/core';

import { AllViewsService } from './allViews.service';

@Component({
  selector: 'all-views',
  templateUrl: './allViews.html',
  styleUrls: ['./allViews.scss']
})
export class AllViews {

  query: string = '';

  allViewData: any[];

  constructor(protected service: AllViewsService) {
    this.service.getData().then((data) => {
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
