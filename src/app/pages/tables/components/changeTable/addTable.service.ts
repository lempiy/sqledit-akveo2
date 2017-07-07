import { Injectable } from '@angular/core';

@Injectable()
export class AddTableService {

  addTableData = {
    name: '',
    data: [],
  };

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.addTableData);
      // }, 2000);
    });
  }
}
