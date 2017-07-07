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
      this.allTableData = data;
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
