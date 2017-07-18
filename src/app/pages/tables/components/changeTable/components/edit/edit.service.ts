import { Injectable } from '@angular/core';
import { TablesService } from '../../../../tables.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EditService {

  editData = {
    name: '',
    sql: '',
    where: '',
  };

  constructor(protected _tables: TablesService) {

  }

  getData(name: string): Observable<any> {
    return this._tables.getTable(name);
  }

  getConstraits(name: string): Observable<any> {
    return this._tables.getPragma(name);
  }

  getAllAboutTable(name: string): Observable<EditData> {
    return Observable.forkJoin([
        this.getData(name), 
        this.getConstraits(name), 
        this.getRows(name),
      ])
      .map(response => ({
        data: response[0],
        contraints: response[1],
        row: response[2],
      }));
  }
  
  getRows(name: string): Observable<any> {
    return this._tables.getRows(name);
  }

  addRow(tableName: string, rowData: Row[]) {
      return this._tables.addRow(tableName, rowData);
  }

  editRow(tableName: string, rowData: Row[], where: string) {
      rowData = rowData.map(c => {
        c.value = `${c.value}`;
        return c;
      });
      return this._tables.editRow(tableName, rowData, where);
  }

  deleteRow(tableName: string, where: string) {
    return this._tables.deleteRow(tableName, where);
  }
}

class Row {
  name: string;
  value: string;
}

class EditData {
  data: any;
  contraints: any;
  row: any;
}
