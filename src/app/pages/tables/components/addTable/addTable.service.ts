import { Injectable } from '@angular/core';
import { TablesService } from '../../tables.service';

@Injectable()
export class AddTableService {
  
  addTableData = {
    name: '',
    data: [],
  };

  constructor(protected _tables: TablesService) {

  }
  
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
        resolve(this.addTableData);
      // }, 2000);
    });
  }
}
