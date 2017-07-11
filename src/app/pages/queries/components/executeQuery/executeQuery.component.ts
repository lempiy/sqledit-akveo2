import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ExecuteQueryService } from './executeQuery.service';
import { DatabaseService } from '../../../database/database.service';

@Component({
  selector: 'execute-query',
  templateUrl: './executeQuery.html',
  styleUrls: ['./executeQuery.scss']
})
export class ExecuteQuery implements AfterViewInit {

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

  constructor(protected service: ExecuteQueryService, public db: DatabaseService) {
    
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
    Object.assign(this.result, {
      status: 'success',
      message: `Some server response goes here.`,
    })
  }
}
