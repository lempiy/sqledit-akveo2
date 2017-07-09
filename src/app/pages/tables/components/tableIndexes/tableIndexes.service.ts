import { Injectable } from '@angular/core';
import { TablesService } from '../../tables.service';

@Injectable()
export class TableIndexesService {

  constructor(protected _tables: TablesService) {

  }

  getData(tableName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._tables.allTableData
          .find(table => table.name === tableName).indexes);
      }, 1000);
    });
  }
}
