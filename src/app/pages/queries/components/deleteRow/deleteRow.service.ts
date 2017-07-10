import { Injectable } from '@angular/core';
import { QueriesService } from '../../queries.service';
import { TablesService } from '../../../tables/tables.service';

@Injectable()
export class DeleteRowService {

  addRowData = {
    name: '',
    sql: '',
  };

  constructor(protected _queries: QueriesService, protected _tables: TablesService) {

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this._tables.allTableData);
      // }, 2000);
    });
  }
}
