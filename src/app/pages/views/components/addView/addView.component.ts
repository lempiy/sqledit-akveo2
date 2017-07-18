import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { AddViewService } from './addView.service';
import { Subscription } from 'rxjs/Rx';

import { DatabaseService } from '../../../database/database.service';

@Component({
  selector: 'add-view',
  templateUrl: './addView.html',
  styleUrls: ['./addView.scss']
})
export class AddView implements AfterViewInit, OnDestroy {

  query: string = '';
  cons: Subscription[];

  allViewData: any = {
    name: '',
    sql: '',
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
      fieldType: {
        title: 'Field Type',
        editor: {
          type: 'list',
          config: {
            list: this.sqlColumnTypes,
            completer: {
              titleField: 'BIGINT',
            }
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Data type...',
            list: this.sqlColumnTypes,
          },
        },
      }
    }
  };

  @ViewChild('inputNameElement') inputNameElement: ElementRef;
  
  constructor(protected service: AddViewService, public db: DatabaseService) {
    this.cons = [];
  }

  ngAfterViewInit() {
    (<HTMLInputElement>this.inputNameElement.nativeElement).focus();
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSubmit(): void {
    this.cons.push(
      this.service.createView(this.allViewData).subscribe(data => {
          Object.assign(this.result, {
            status: 'success',
            message: `View ${this.allViewData.name} has been created.`,
          });
      }),
    );
  }
}
