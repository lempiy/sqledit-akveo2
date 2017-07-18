import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AddTableService } from './addTable.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DatabaseService } from '../../../database/database.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { GlobalState } from '../../../../global.state';

@Component({
  selector: 'add-table',
  templateUrl: './addTable.html',
  styleUrls: ['./addTable.scss']
})
export class AddTable implements AfterViewInit {

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

  allTableData: any = {
    name: '',
    data: [],
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
    { value: 'FLOAT', title: 'FLOAT' },
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
    pager: {
      perPage: 15,
    },
    noDataMessage: 'No columns',
    columns: {
      name: {
        title: 'Name',
        type: 'string',
        filter: false,
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
        filter: false,
      },
      notnull: {
        title: 'Not NULL',
        type: 'text',
        filter: false,
        editor: {
          type: 'checkbox',
          config: {
            true: '\u2611',
            false: ' ',
          },
        },
      },
      pk: {
        title: 'Primary Key',
        type: 'text',
        filter: false,
        editor: {
          type: 'checkbox',
          config: {
            true: '\u26BF',
            false: ' ',
          },
        },
      },
      dflt_value: {
        title: 'Default Value',
        type: 'string',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  @ViewChild('inputNameElement') inputNameElement: ElementRef;
  
  constructor(
    protected service: AddTableService, 
    public db: DatabaseService,
    private gs: GlobalState) {
    this.cons = [];
    this.service.getData().then((data) => {
      this.allTableData = Object.assign(this.allTableData, data);
      this.source.load(data.data);
    });
  }

  ngAfterViewInit() {
    (<HTMLInputElement>this.inputNameElement.nativeElement).focus();
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
      if (!data.length) {
        Object.assign(this.result, {
          status: 'fail',
          message: `Table ${this.allTableData.name} is empty.`,
        });
      }
      const body = data.reduce((acc, col) => {
        acc.fields.push({
          name: col.name,
          type: col.type,
        });
        return acc;
      }, { table_name: this.allTableData.name, fields: [] });
      
      this.cons.push(
        this.service.createTable(body).subscribe(res => {
          Object.assign(this.result, {
            status: 'success',
            message: `Table ${this.allTableData.name} was created.`,
          });
          this.gs.notifyDataChanged('created.table', this.allTableData.name);
        }),
      );
    });
  }
}
