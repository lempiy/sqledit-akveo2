import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChangeViewService } from './changeView.service';

@Component({
  selector: 'change-view',
  templateUrl: './changeView.html',
  styleUrls: ['./changeView.scss']
})
export class ChangeView implements AfterViewInit {

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

  changeViewData: any = {
    name: '',
    sql: '',
  };
  
  constructor(protected service: ChangeViewService) {
    this.service.getData().then((data) => {
      this.changeViewData = Object.assign(this.changeViewData, data);
    });
  }

  ngAfterViewInit() {
  }

  onSubmit(): void {
      console.log(this.changeViewData)
      Object.assign(this.result, {
        status: 'success',
        message: `View ${this.changeViewData.name} has been changed.`,
      })
  }
}
