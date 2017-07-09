import { Injectable } from '@angular/core';
import { ViewsService } from '../../views.service';

@Injectable()
export class AddViewService {
  
  addViewData = {
    name: '',
    data: [],
  };

  constructor(protected _tables: ViewsService) {

  }
  
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.addViewData);
      // }, 2000);
    });
  }
}
