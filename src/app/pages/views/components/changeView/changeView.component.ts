import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChangeViewService } from './changeView.service';

@Component({
  selector: 'change-view',
  templateUrl: './changeView.html',
  styleUrls: ['./changeView.scss']
})
export class ChangeView implements AfterViewInit {

  query: string = '';

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
  }
}
