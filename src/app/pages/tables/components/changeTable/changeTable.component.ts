import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChangeTableService } from './changeTable.service';
import { LocalDataSource } from 'ng2-smart-table';

import { DatabaseService } from '../../../database/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'change-table',
  templateUrl: './changeTable.html',
  styleUrls: ['./changeTable.scss']
})
export class ChangeTable implements AfterViewInit {

  query: string = '';
  private sub: any;
  private tabName: string;

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
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  
  constructor(
    protected service: ChangeTableService, 
    private route: ActivatedRoute,
    public db: DatabaseService) {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.tabName = params['name'];
      console.log(this.tabName)
      this.service.getData().then((data: any[]) => {
        this.allTableData = Object.assign(data.find(table => table.name === this.tabName));
        this.source.load(this.allTableData.columns);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
