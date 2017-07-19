import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EditService } from './edit.service';
import { LocalDataSource } from 'ng2-smart-table';

import { validators } from '../../../../table.validators';
import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'edit-row',
  templateUrl: './edit.html',
  styleUrls: ['./edit.scss']
})
export class Edit implements OnInit, OnDestroy {
  cons: Subscription[];
  tabName: string;
  currentTable: any;
  query: string = '';
  allTables: any = [];
  allRows: any[];
  constraints: any[];
  source: LocalDataSource = new LocalDataSource();

  editData: any = {
    name: '',
    where: '',
  };

  result: any = {
    status: '',
    violations: [],
    message: '',
  };

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
    columns: {},
  };

  clearResult() {
    this.result = {
      status: '',
      violations: [],
      message: '',
    };
  }
  
  constructor(protected service: EditService, private route: ActivatedRoute) {
    this.cons = [];
  }

  private getAllData(name: string) {
    this.cons.push(
      this.service.getAllAboutTable(name).subscribe(data => {
        
          this.currentTable = data.data;
          this.editData = {
            name: this.currentTable.name,
            columns: this.currentTable.columns.map(column => ({
              name: column.name,
              input: '',
              type: column.type,
            })),
          };
        
        this.constraints = data.contraints;
          this.allRows = data.row.map(row => {
            Object.keys(row).forEach(key => {
              if (row[key] === null) {
                const constraint = this.constraints.find(c => c.name === key);
                row[key] = constraint.dflt_value || 'NULL';
              }
            });
            return row;
          });
            
          this.currentTable.columns.forEach(column => {
            this.settings.columns[column.name] = {
                title: column.name,
                type: 'string',
            };
          });
          this.source.load(this.allRows);
      }),
    );
  }

  ngOnInit() {
    this.cons.push(this.route.parent.params.subscribe(params => {
        this.tabName = params['name'];
        this.getAllData(this.tabName);
      }),
    );
  }

  onEditConfirm($event) {
    const { newData } = $event;
    const keys = Object.keys($event.newData);
    const changedData = keys.reduce((acc, key) => {
      if ($event.data[key] !== $event.newData[key]) {
        acc[key] = $event.newData[key];
      }
      return acc;
    }, {});
    
    const result = this.inspectErrors(keys, changedData, $event.source.data);
    if (result.length) {
      this.displayInputError(result);
      $event.confirm.reject();
      window.scrollTo(0, 0);
    } else {
      this.cons.push(
        this.editRow(newData, $event.data).subscribe(res => {
          $event.confirm.resolve();
          this.clearResult();
          const withNull = keys.reduce((acc, key) => {
            if (newData[key] === '') {
              const constraint = this.constraints.find(c => c.name === key);
              acc[key] = constraint.dflt_value || 'NULL';
            } else {
              acc[key] = newData[key];
            }
            return acc;
          }, {});
          setTimeout(() => $event.source.update($event.data, withNull));
        },
        err => {
          Object.assign(this.result, {
            status: 'fail',
            message: err,
          });
        }),
      );
    }
  }

  onDeleteConfirm($event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.cons.push(
        this.deleteRow($event.data).subscribe(data => {
          $event.confirm.resolve();
        }),
      );
    } else {
      $event.confirm.reject();
    }
  }

  deleteRow(oldData): Observable<any> {
    let where = '';
    const notNullValues = [];
    const pk = Object.keys(oldData).find(key => {
      if (oldData[key] && oldData[key] !== 'NULL') {
        notNullValues.push({
          column: key,
          value: oldData[key],
        });
      }
      return this.constraints.find(c => c.pk && c.name === key);
    });
    if (pk) {
      where = `${pk}=${oldData[pk]}`;
    } else if (oldData.rowid) { 
      where = `rowid=${oldData.rowid}`;
    } else {
      where = notNullValues.reduce((acc, c, i) => {
        const type = this.currentTable.columns.find(col => col.name === c.column).type;
        if (validators.isNumber(type)) {
          acc += acc.length ? `AND ${c.column}=${c.value} ` : `${c.column}=${c.value} `;
        } else {
          acc += acc.length ? `AND ${c.column}='${c.value}' ` : `${c.column}='${c.value}' `;
        }
        return acc;
      }, '');
    }
    return this.service.deleteRow(this.tabName, where);
  }

  addRow(newData): Observable<any> {
    const rowData = Object.keys(newData).reduce((acc, key) => {
      if (newData[key] && newData[key] !== 'NULL') {
        acc.push({
          column: key,
          value: newData[key],
        });
      }
      return acc;
    }, []);
    return this.service.addRow(this.tabName, rowData);
  }

  editRow(newData, oldData): Observable<any> {
    const rowData = Object.keys(newData).reduce((acc, key) => {
      if (newData[key] && newData[key] !== 'NULL') {
        acc.push({
          column: key,
          value: newData[key],
        });
      }
      return acc;
    }, []);
    let where = '';
    const notNullValues = [];
    const pk = Object.keys(oldData).find(key => {
      if (oldData[key] && oldData[key] !== 'NULL') {
        notNullValues.push({
          column: key,
          value: oldData[key],
        });
      }
      return this.constraints.find(c => c.pk && c.name === key);
    });
    if (pk) {
      where = `${pk}=${oldData[pk]}`;
    } else if (oldData.rowid) { 
      where = `rowid=${oldData.rowid}`;
    } else {
      where = notNullValues.reduce((acc, c, i) => {
        const type = this.currentTable.columns.find(col => col.name === c.column).type;
        if (validators.isNumber(type)) {
          acc += acc.length ? `AND ${c.column}=${c.value} ` : `${c.column}=${c.value} `;
        } else {
          acc += acc.length ? `AND ${c.column}='${c.value}' ` : `${c.column}='${c.value}' `;
        }
        return acc;
      }, '');
    }
    return this.service.editRow(this.tabName, rowData, where);
  }

  onAddConfirm($event) {
    const { newData } = $event;
    const keys = Object.keys($event.newData);
    const result = this.inspectErrors(keys, newData, $event.source.data);
    if (result.length) {
      this.displayInputError(result);
      $event.confirm.reject();
      window.scrollTo(0, 0);
    } else {
      const withNull = {};
      keys.forEach(key => {
        if (newData[key] === '') {
          const constraint = this.constraints.find(c => c.name === key);
          withNull[key] = constraint.dflt_value || 'NULL';
        }
      });

      this.cons.push(
        this.addRow(newData).subscribe(res => {
          $event.confirm.resolve();
          this.clearResult();

          setTimeout(() => {
            const { data } = $event.source;
            const el = data.find(element => {
              return keys.every(key => {
                return element[key] === newData[key];
              });
            });
            $event.source.update(el, withNull);
          });
        },
        err => {
          Object.assign(this.result, {
            status: 'fail',
            message: err,
          });
        }),
      );
    }
  }

  private inspectErrors(keys: string[], newData: any, allData: any) {
    return keys.reduce((acc, key) => {
      if (key === 'rowid') {
        return acc;
      }
      const itemValue = newData[key];
      const itemType = this.currentTable.columns.find(column => column.name === key).type;
      let err = validators.validateRow(newData[key], itemType);
      if (err) {
        acc.push(err);
      }
      const constraint = this.constraints.find(c => c.name === key);
      err = validators.validateConstraints(newData[key], allData.map(data => data[key]), constraint, key);
      if (err) {
        acc.push(err);
      }
      return acc;
    }, []);
  }

  displayInputError(result) {
    Object.assign(this.result, {
      status: 'fail',
      message: `Wrong input.`,
      violations: result,
    });
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  onSubmit(): void {
    const data = { name: this.editData.name, data: null };
    data.data = this.editData.columns.map(item => ({
      name: item.name,
      value: item.input,
    }));
    Object.assign(this.result, {
      status: 'success',
      message: `Succcesfully added row to table ${this.editData.name}.`,
    });
  }
}
