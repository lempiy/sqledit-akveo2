import { Component } from '@angular/core';

import { AllTablesService } from './allTables.service';

@Component({
  selector: 'all-tables',
  templateUrl: './allTables.html',
  styleUrls: ['./allTables.scss']
})
export class AllTables {

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

  allTableData: any[];

  constructor(protected service: AllTablesService) {
    this.service.getData().then((data) => {
      this.allTableData = data.map(table => ({
        name: table.name,
        columns: table.columns ? table.columns.length : 0,
        indexes: table.indexes ? table.indexes.length : 0,
        views: table.views ? table.views.length : 0,
      }));
    });
  }

  deleteTable($event) {
    this.allTableData.splice(
      this.allTableData.findIndex(table => table.name === $event.name), 
    1);
    Object.assign(this.result, {
      status: 'success',
      message: `Table ${$event.name} was deleted.`,
    })
  }
}
