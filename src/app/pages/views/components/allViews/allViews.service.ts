import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AllViewsService {

  constructor(protected _tables: ViewsService) {

  }

  getData(): Observable<any> {
    return this._tables.getAllViews();
  }
}
