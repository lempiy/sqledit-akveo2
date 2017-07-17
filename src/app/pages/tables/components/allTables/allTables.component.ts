import { Component, OnInit, OnDestroy } from '@angular/core';

import { AllTablesService } from './allTables.service';
import { DatabaseService } from '../../../database/database.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'all-tables',
  templateUrl: './allTables.html',
  styleUrls: ['./allTables.scss']
})
export class AllTables implements OnInit, OnDestroy {

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

  allTableData: any[];

  constructor(protected service: AllTablesService, public db: DatabaseService) {
    this.cons = [];
  }

  ngOnInit() {
    this.cons.push(
      this.service.getData().subscribe(data => {
        this.allTableData = data.map(table => ({
          name: table.name,
          columns: table.columns ? table.columns.length : 0,
          indexes: table.indexes ? table.indexes.length : 0,
          views: table.views ? table.views.length : 0,
        }));
      }),
    );
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  deleteTable($event) {
    if (!window.confirm('Are you sure you want to delete?')) {
      return;
    }
    this.cons.push(
      this.service.deleteTable($event.name).subscribe(
        data => {
          Object.assign(this.result, {
            status: 'success',
            message: `Table ${$event.name} was deleted.`,
          });
        },
        error => {
          Object.assign(this.result, {
            status: 'fail',
            message: error,
          });
        }),
    );
  }
}
