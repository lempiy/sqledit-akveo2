import { Injectable } from '@angular/core';

@Injectable()
export class ChangeTableService {

  changeTableData = {
    name: '',
    data: [],
  };

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.changeTableData);
      // }, 2000);
    });
  }
}
