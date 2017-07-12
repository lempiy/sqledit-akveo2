import { Injectable } from '@angular/core';
import { TablesService } from '../../../../tables.service';

@Injectable()
export class EditService {

  editData = {
    name: '',
    sql: '',
    where: '',
  };

  constructor(protected _tables: TablesService) {

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this._tables.allTableData);
      // }, 2000);
    });
  }
}
