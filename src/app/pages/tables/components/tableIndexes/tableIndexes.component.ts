import { Component } from '@angular/core';

import { TableIndexesService } from './tableIndexes.service';

@Component({
  selector: 'table-indexes',
  templateUrl: './tableIndexes.html',
  styleUrls: ['./tableIndexes.scss']
})
export class TableIndexes {

  query: string = '';

  tableIndexesData: any[];

  constructor(protected service: TableIndexesService) {
    this.service.getData('user').then((data) => {
      this.tableIndexesData = data;
      console.log(this.tableIndexesData)
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
