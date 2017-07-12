import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { EditService } from './edit.service';

@Component({
  selector: 'edit-row',
  templateUrl: './edit.html',
  styleUrls: ['./edit.scss']
})
export class Edit implements AfterViewInit {

  query: string = '';
  allTables: any = [];
  tablesHash: any = {};
  editData: any = {
    name: '',
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

  
  constructor(protected service: EditService) {
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
    const data = { name: this.editData.name, data: null };
    data.data = this.tablesHash[data.name].columns.map(item => ({
      name: item.name,
      value: item.input,
    }));
    console.log(data)
    Object.assign(this.result, {
      status: 'success',
      message: `Succcesfully added row to table ${this.editData.name}.`,
    })
  }
}
