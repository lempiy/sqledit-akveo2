import { Component, ViewChild, OnDestroy } from '@angular/core';

import { QueriesService } from '../../queries.service';
import { DatabaseService } from '../../../database/database.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'execute-query',
  templateUrl: './executeQuery.html',
  styleUrls: ['./executeQuery.scss']
})
export class ExecuteQuery implements OnDestroy {

  query: string = '';
  cons: Subscription[];

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

  constructor(protected service: QueriesService, public db: DatabaseService) {
    this.cons = [];
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  onSubmit(): void {
    this.cons.push(
      this.service.executeQuery(this.query).subscribe(data => {
        Object.assign(this.result, {
          status: 'success',
          message: typeof data === 'object' ? JSON.stringify(data) : data,
        });
      }),
    );
  }
}
