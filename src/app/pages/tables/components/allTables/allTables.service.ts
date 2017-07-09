import {Injectable} from '@angular/core';
import { TablesService } from '../../tables.service';

@Injectable()
export class AllTablesService {

  constructor(protected _tables: TablesService) {

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._tables.allTableData);
      }, 1000);
    });
  }
}
