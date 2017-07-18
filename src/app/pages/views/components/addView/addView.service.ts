import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddViewService {
  
  addViewData = {
    name: '',
    data: [],
  };

  constructor(protected _tables: ViewsService) {

  }

  createView(data: any): Observable<any> {
    return this._tables.createView(data);
  }
  
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.addViewData);
      // }, 2000);
    });
  }
}
