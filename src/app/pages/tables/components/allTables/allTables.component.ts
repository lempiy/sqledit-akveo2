import { Component } from '@angular/core';

import { AllTablesService } from './allTables.service';

@Component({
  selector: 'all-tables',
  templateUrl: './allTables.html',
  styleUrls: ['./allTables.scss']
})
export class AllTables {

  query: string = '';

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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
