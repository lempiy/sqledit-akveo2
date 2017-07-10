import { Injectable } from '@angular/core';
import { QueriesService } from '../../queries.service';

@Injectable()
export class AllViewsService {

  constructor(protected _tables: QueriesService) {

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._tables.allViewData);
      }, 1000);
    });
  }
}
