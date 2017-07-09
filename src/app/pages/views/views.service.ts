import {Injectable} from '@angular/core';

@Injectable()
export class ViewsService {
    selectedView = {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
  };


  allViewData = [
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
    {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
    },
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.allViewData);
      }, 2000);
    });
  }
}
