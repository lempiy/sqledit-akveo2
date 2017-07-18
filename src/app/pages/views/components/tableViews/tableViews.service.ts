import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';
import { DatabaseService } from '../../../database/database.service';

@Injectable()
export class TableViewsService {

  constructor(protected _tables: ViewsService, public db: DatabaseService) {

  }

  getData(tableName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}
