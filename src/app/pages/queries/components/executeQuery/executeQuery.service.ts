import { Injectable } from '@angular/core';
import { QueriesService } from '../../queries.service';

@Injectable()
export class ExecuteQueryService {
  
  queryData = {
    name: '',
    data: [],
  };

  constructor(protected _tables: QueriesService) {

  }
  
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.queryData);
      // }, 2000);
    });
  }
}
