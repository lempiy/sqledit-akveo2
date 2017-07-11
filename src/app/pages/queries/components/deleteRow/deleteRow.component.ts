import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { DeleteRowService } from './deleteRow.service';

@Component({
  selector: 'update-row',
  templateUrl: './deleteRow.html',
  styleUrls: ['./deleteRow.scss']
})
export class DeleteRow implements AfterViewInit {

  query: string = '';
  allTables: any = [];
  tablesHash: any = {};
  deleteRowData: any = {
    name: '',
    where: '',
  };

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
  
  constructor(protected service: DeleteRowService) {
    this.service.getData().then((data) => {
      this.allTables = Object.assign(this.allTables, data);
      this.allTables.forEach(table => {
        this.tablesHash[table.name] = table;
      });
    });
  }

  ngAfterViewInit() {
  }

  onSubmit(): void {
    console.log(this.deleteRowData)
    Object.assign(this.result, {
      status: 'success',
      message: `Succcesfully deleted row in table ${this.deleteRowData.name}.`,
    })
  }
}
