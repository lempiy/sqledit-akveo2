import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { AddRowService } from './addRow.service';

@Component({
  selector: 'add-row',
  templateUrl: './addRow.html',
  styleUrls: ['./addRow.scss']
})
export class AddRow implements AfterViewInit {

  query: string = '';
  allTables: any = [];
  tablesHash: any = {};
  addRowData: any = {
    name: '',
  };
  
  constructor(protected service: AddRowService) {
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
    const data = { name: this.addRowData.name, data: null };
    data.data = this.tablesHash[data.name].columns.map(item => ({
      name: item.name,
      value: item.input,
    }));
    console.log(data)
  }
}
