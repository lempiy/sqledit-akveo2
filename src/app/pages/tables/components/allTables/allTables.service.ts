import {Injectable} from '@angular/core';

@Injectable()
export class AllTablesService {

  allTableData = [
    {
      id: 1,
      tableName: 'order',
      columns: 12,
      indexes: 0,
      views: 2,
      DDL: 'show'
    },
    {
      id: 2,
      tableName: 'user',
      columns: 5,
      indexes: 1,
      views: 2,
      DDL: 'show'
    },
    {
      id: 3,
      tableName: 'user_order',
      columns: 3,
      indexes: 2,
      views: 0,
      DDL: 'show'
    },
    {
      id: 4,
      tableName: 'product',
      columns: 4,
      indexes: 5,
      views: 1,
      DDL: 'show'
    },
    {
      id: 5,
      tableName: 'product_order',
      columns: 3,
      indexes: 2,
      views: 1,
      DDL: 'show'
    },
    {
      id: 6,
      tableName: 'event',
      columns: 5,
      indexes: 3,
      views: 1,
      DDL: 'show'
    },
    {
      id: 7,
      tableName: 'message',
      columns: 4,
      indexes: 3,
      views: 1,
      DDL: 'show'
    },
    {
      id: 8,
      tableName: 'location',
      columns: 4,
      indexes: 2,
      views: 0,
      DDL: 'show'
    },
    {
      id: 9,
      tableName: 'level',
      columns: 4,
      indexes: 0,
      views: 0,
      DDL: 'show'
    },
    {
      id: 10,
      tableName: 'promo',
      columns: 2,
      indexes: 0,
      views: 0,
      DDL: 'show'
    },
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.allTableData);
      }, 2000);
    });
  }
}
