import { Injectable } from '@angular/core';
import { TablesService } from '../../tables.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AllTablesService {

  constructor(protected _tables: TablesService) {

  }

  getData(): Observable<any> {
    return this._tables.getAllTables();
  }

  deleteTable(name: string): Observable<any> {
    return this._tables.deleteTable(name);
  }
}
