import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';

@Injectable()
export class AllViewsService {

  constructor(protected _tables: ViewsService) {

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._tables.allViewData);
      }, 1000);
    });
  }
}
