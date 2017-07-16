import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ChangeTableService } from '../../changeTable.service';
import { LocalDataSource } from 'ng2-smart-table';

import { ActivatedRoute } from '@angular/router';
import { validators } from '../../../../table.validators';

@Component({
  selector: 'structure-table',
  templateUrl: './structure.html',
  styleUrls: ['./structure.scss']
})
export class Structure implements AfterViewInit {

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
    private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.tabName = params['name'];
      Promise.all([this.service.getData(), this.service.getPragma()]).then((result: any[]) => {
        const data = result[0];
        const pragma = result[1];
        // const curTable = Object.assign(data.find(table => table.name === this.tabName));
        const curTable = Object.assign({}, data.find(table => table.name === 'CarriersExtraData'));
        this.allTableData = curTable;
        this.allTableData.columns = pragma.map(column => {
          const c = Object.assign({}, column, {
            pk: column.pk ? '\u26BF' : ' ',
            notnull: column.notnull ? '\u2611' : ' ',
          });
          const item = curTable.columns.find(col => col.name === column.name);
          return Object.assign({}, item, c);
        });
        this.source.load(this.allTableData.columns);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
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
      console.log({
        name: this.allTableData.name,
        columns: data,
      });
      Object.assign(this.result, {
        status: 'success',
        message: `Table ${this.allTableData.name} has been edited.`,
      })
    })
  }
}
