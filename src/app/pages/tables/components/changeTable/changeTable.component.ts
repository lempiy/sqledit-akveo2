import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChangeTableService } from './changeTable.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'change-table',
  templateUrl: './changeTable.html',
  styleUrls: ['./changeTable.scss']
})
export class ChangeTable implements AfterViewInit {

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

  allTableData: any = {
    name: '',
    columns: [],
  };

  sqlColumnTypes = [
    { value: 'BIGINT', title: 'BIGINT' },
    { value: 'BLOB', title: 'BLOB' }, 
    { value: 'BOOLEAN', title: 'BOOLEAN' }, 
    { value: 'CHAR', title: 'CHAR' },
    { value: 'DATE', title: 'DATE' },
    { value: 'DATETIME', title: 'DATETIME' },
    { value: 'DECIMAL', title: 'DECIMAL' }, 
    { value: 'DOUBLE', title: 'DOUBLE' }, 
    { value: 'INTEGER', title: 'INTEGER' },
    { value: 'INT', title: 'INT' },
    { value: 'NONE', title: 'NONE' },
    { value: 'NUMERIC', title: 'NUMERIC' },
    { value: 'REAL', title: 'REAL' },
    { value: 'STRING', title: 'STRING' },
    { value: 'TEXT', title: 'TEXT' },
    { value: 'TIME', title: 'TIME' },
    { value: 'VARCHAR', title: 'VARCHAR' },
  ];

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    noDataMessage: 'No columns',
    columns: {
      name: {
        title: 'Name',
        type: 'string'
      },
      type: {
        title: 'Field Type',
        editor: {
          type: 'completer',
          config: {
            completer: {
              data: this.sqlColumnTypes,
              titleField: 'title',
              searchFields: 'value',
            },
          },
        },
        filter: {
          type: 'completer',
          config: {
            completer: {
              data: this.sqlColumnTypes,
              titleField: 'title',
              searchFields: 'value',
            },
          },
        },
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  
  constructor(protected service: ChangeTableService) {
    this.service.getData().then((data) => {
      this.allTableData = Object.assign(this.allTableData, data);
      this.source.load(data.columns);
    });
  }

  ngAfterViewInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onSubmit(): void {
    this.source.getAll().then(data => {
      console.log({
        name: this.allTableData.name,
        columns: data,
      });
      Object.assign(this.result, {
        status: 'success',
        message: `Table ${this.allTableData.name} has been changed.`,
      })
    })
  }
}
