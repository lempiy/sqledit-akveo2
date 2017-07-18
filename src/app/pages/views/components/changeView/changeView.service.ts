import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChangeViewService {

  changeViewData = {
    name: '',
    sql: '',
  };

  constructor(protected _tables: ViewsService) {

  }

  getData(name: string): Observable<any> {
    return this._tables.getAllViews().map(data => {
      return data.find(view => view.name === name);
    });
  }

  changeView(data: any): Observable<any>  {
    return this._tables.updateView(data);
  }
}
