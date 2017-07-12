import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EditService } from './edit.service';

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
  editState: string;
  editData: any = {
    name: '',
    where: '',
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
  
  constructor(protected service: EditService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.tabName = params['name'];
      this.editState = 'add';
      this.service.getData().then((data: any[]) => {
        this.allTables = Object.assign(this.allTables, data);
        this.currentTable = this.allTables.find(table => table.name === this.tabName);
        this.editData = {
          name: this.currentTable.name,
          columns: this.currentTable.columns.map(column => ({
            name: column.name,
            input: '',
            type: column.type,
          })),
        };
      });
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
    console.log(data)
    Object.assign(this.result, {
      status: 'success',
      message: `Succcesfully added row to table ${this.editData.name}.`,
    })
  }
}
