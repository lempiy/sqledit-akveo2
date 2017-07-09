import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';

@Injectable()
export class TableViewsService {

  constructor(protected _tables: ViewsService) {

  }

  getData(tableName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._tables.allViewData.filter(view => view.table_name === tableName));
      }, 1000);
    });
  }
}
