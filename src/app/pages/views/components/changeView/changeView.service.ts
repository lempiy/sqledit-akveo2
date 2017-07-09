import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';

@Injectable()
export class ChangeViewService {

  changeViewData = {
    name: '',
    sql: '',
  };

  constructor(protected _tables: ViewsService) {

  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this._tables.selectedView);
      // }, 2000);
    });
  }
}
