import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ExecuteQueryService } from './executeQuery.service';

@Component({
  selector: 'execute-query',
  templateUrl: './executeQuery.html',
  styleUrls: ['./executeQuery.scss']
})
export class ExecuteQuery implements AfterViewInit {

  query: string = '';

  constructor(protected service: ExecuteQueryService) {
    
  }

  ngAfterViewInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onSubmit(): void {
    console.log(this.query)
  }
}
