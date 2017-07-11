import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { UpdateRowService } from './updateRow.service';
import { DatabaseService } from '../../../database/database.service';

@Component({
  selector: 'update-row',
  templateUrl: './updateRow.html',
  styleUrls: ['./updateRow.scss']
})
export class UpdateRow implements AfterViewInit {

  query: string = '';
  allTables: any = [];
  tablesHash: any = {};
  updateRowData: any = {
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

  constructor(protected service: UpdateRowService, public db: DatabaseService) {
    this.service.getData().then((data) => {
      this.allTables = Object.assign(this.allTables, data);
      this.allTables.forEach(table => {
        this.tablesHash[table.name] = table;
        this.tablesHash[table.name].input = '';
      });
    });
  }

  ngAfterViewInit() {
  }

  onSubmit(): void {
    const data = Object.assign({ 
      data: null, 
    }, this.updateRowData);
    data.data = this.tablesHash[data.name].columns.map(item => ({
      name: item.name,
      value: item.input,
    }));
    console.log(data)
    Object.assign(this.result, {
      status: 'success',
      message: `Succcesfully updated row in table ${this.updateRowData.name}.`,
    })
  }
}
