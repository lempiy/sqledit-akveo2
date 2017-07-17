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
}

class EditData {
  data: any;
  contraints: any;
  row: any;
}
