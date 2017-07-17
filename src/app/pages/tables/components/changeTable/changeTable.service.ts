import { Injectable } from '@angular/core';
import { TablesService } from '../../tables.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChangeTableService {

  changeTableData = {
    name: '',
    data: [],
  };

  getData():Promise<any> {
      return Promise.resolve();
  }

  constructor(protected _tables: TablesService) {

  }

  getTable(name: string): Observable<any> {
    return this._tables.getTable(name);
  }

  getPragma(name: string): Observable<any> {
    return this._tables.getPragma(name);
  }

  getDataAndConstraits(name: string): Observable<Structure> {
    return Observable.forkJoin([this.getTable(name), this.getPragma(name)])
    .map(response => ({
        data: response[0],
        contraints: response[1],
    }));
  }

  getIndexes(name: string): Observable<any> {
    return this._tables.getIndexes(name);
  }

  changeTableName(oldName: string, newName: string): Observable<any> {
    return this._tables.updateTableName(oldName, newName);
  }
}

class Structure {
  data: any;
  contraints: any;
}
