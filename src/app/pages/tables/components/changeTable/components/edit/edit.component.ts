import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EditService } from './edit.service';
import { LocalDataSource } from 'ng2-smart-table';

import { validators } from '../../../../table.validators';

@Component({
  selector: 'edit-row',
  templateUrl: './edit.html',
  styleUrls: ['./edit.scss']
})
export class Edit implements OnInit, OnDestroy {
  sub: any;
  tabName: string;
  currentTable: any;
  query: string = '';
  allTables: any = [];
  allRows: any[];
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
  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.tabName = params['name'];
      this.service.getData().then((data: any[]) => {
        this.allTables = Object.assign(this.allTables, data);
        // this.currentTable = this.allTables.find(table => table.name === this.tabName);
        this.currentTable = this.allTables.find(table => table.name === 'CarriersExtraData');
        this.editData = {
          name: this.currentTable.name,
          columns: this.currentTable.columns.map(column => ({
            name: column.name,
            input: '',
            type: column.type,
          })),
        };
      });
      this.service.getRows().then((data: any[]) => {
        this.allRows = data.map(row => {
          Object.keys(row).forEach(key => {
            if (row[key] === null) {
              row[key] = 'NULL';
            }
          });
          return row;
        });
        Object.keys(this.allRows[0]).forEach(key => {
          this.settings.columns[key] = {
              title: key,
              type: 'string',
              //filter: false,
          };
        });
        this.source.load(this.allRows);
      });
    });
  }

  onEditConfirm($event) {
    const { newData } = $event;
    const keys = Object.keys($event.newData);
    const DEFAULT = 'NULL';
    const result = this.inspectErrors(keys, newData);
    if (result.length) {
      this.displayInputError(result);
      $event.confirm.reject();
      window.scrollTo(0, 0);
    } else {
      $event.confirm.resolve();
      this.clearResult();
      const withNull = keys.reduce((acc, key) => {
        if (newData[key] === '') {
          acc[key] = DEFAULT;
        } else {
          acc[key] = newData[key];
        }
        return acc;
      }, {});
      setTimeout(() => $event.source.update($event.data, withNull));
    }
  }

  onAddConfirm($event) {
    const { newData } = $event;
    const keys = Object.keys($event.newData);
    const DEFAULT = 'NULL';
    const result = this.inspectErrors(keys, newData);
    if (result.length) {
      this.displayInputError(result);
      $event.confirm.reject();
      window.scrollTo(0, 0);
    } else {
      const withNull = {};
      keys.forEach(key => {
        if (newData[key] === '') {
          withNull[key] = DEFAULT;
        }
      });

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
    }
  }

  private inspectErrors(keys: string[], newData: any) {
    return keys.reduce((acc, key) => {
      const itemValue = newData[key];
      const itemType = this.currentTable.columns.find(column => column.name === key).type;
      const err = validators.validateRow(newData[key], itemType);
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
    this.sub.unsubscribe();
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
    })
  }
}
