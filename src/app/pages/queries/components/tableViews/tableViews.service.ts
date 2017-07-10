import { Injectable } from '@angular/core';
import { QueriesService } from '../../queries.service';

@Injectable()
export class TableViewsService {

  constructor(protected _tables: QueriesService) {

  }

  getData(tableName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._tables.allViewData.filter(view => view.table_name === tableName));
      }, 1000);
    });
  }
}
