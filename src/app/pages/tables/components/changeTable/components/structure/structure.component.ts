import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';

import { ChangeTableService } from '../../changeTable.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { validators } from '../../../../table.validators';
import { Subscription, Observable } from 'rxjs/Rx';

import { GlobalState } from '../../../../../../global.state';

@Component({
  selector: 'structure-table',
  templateUrl: './structure.html',
  styleUrls: ['./structure.scss']
})
export class Structure implements OnInit, OnDestroy {

  query: string = '';
  private cons: Subscription[];
  private tabName: string;
  inProcess: boolean;

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

  name: string; 

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
    actions: {
      delete: false,
      edit: false,
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
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
  
  constructor(
    protected service: ChangeTableService, 
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private gs: GlobalState) {
    this.cons = [];
  }

  getAllData(name: string) {
    this.cons.push(
      this.service.getDataAndConstraits(name).subscribe(data => {
        const { contraints } = data;
        const curTable = Object.assign({}, data.data);
        this.allTableData = curTable;
        this.name = curTable.name;
        this.allTableData.columns = contraints.map(column => {
          const c = Object.assign({}, column, {
            pk: column.pk ? '\u26BF' : ' ',
            notnull: column.notnull ? '\u2611' : ' ',
          });
          // TODO: fix backend
          if (!curTable.columns) {
            return Object.assign({}, c);
          }
          const item = curTable.columns.find(col => col.name === column.name);
          return Object.assign({}, item, c);
        });
        this.source.load(this.allTableData.columns);
      }),
    );
  }

  changeTableName() {
    this.inProcess = true;
    this.cons.push(
      this.service.changeTableName(this.allTableData.name, this.name)
        .subscribe(
          data => {
            Object.assign(this.result, {
              status: 'success',
              message: `Table name changed to ${this.name}.`,
            });
            // Wait until DB proccess
            setTimeout(() => {
                this.gs.notifyDataChanged('changed.table', { oldName: this.allTableData.name, newName: this.name });
                this.allTableData.name = this.name;
                this.router.navigate([`/pages/tables/${this.name}/structure`], 
                {
                  queryParams: {
                    rename: true,
                  },
                });
              },
            );
          },
          error => {
            Object.assign(this.result, {
              status: 'fail',
              message: `Failed to change for table ${this.allTableData.name}.`,
              violations: [],
            });
          },
          () => this.inProcess = false),
    );
  }

  ngOnInit() {
    this.cons.push(this.route.parent.params.subscribe(params => {
        this.tabName = params['name'];
        if (this.route.snapshot.queryParams['rename']) {
          this.location.replaceState(`/pages/tables/${this.tabName}/structure`);
          return;
        }
        this.getAllData(this.tabName);
      }),
    );
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  displayInputError(result) {
    Object.assign(this.result, {
      status: 'fail',
      message: `Wrong input.`,
      violations: result,
    });
  }

  onConfirm(event): void {
    const err = validators.validateColumn(event.newData);
    if (err.length) {
      this.displayInputError(err);
      return event.confirm.reject();
    }
    this.clearResult();
    return event.confirm.resolve();
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
      Object.assign(this.result, {
        status: 'success',
        message: `Table ${this.allTableData.name} has been edited.`,
      })
    })
  }
}
