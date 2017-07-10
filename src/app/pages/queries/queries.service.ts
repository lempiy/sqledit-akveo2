import {Injectable} from '@angular/core';

@Injectable()
export class QueriesService {
    selectedView = {
        table_name: 'user',
        name: 'Old Users',
        sql: `CREATE VIEW [Old Users] AS
            SELECT id, username
            FROM user
            WHERE created_at >= #1/20/2015#`,
  };

  selectedTable = {
        name: 'user',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
            },
            {
                name: 'username',
                type: 'TEXT',
            },
            {
                name: 'email',
                type: 'TEXT',
            },
            {
                name: 'created_at',
                type: 'DATE',
            },
        ],
        indexes: [{
            name: 'index_username',
            unique: false,
            partial: false,
            columns: [
                {
                    name: 'username',
                },
                {
                    name: 'created_at',
                },
            ],
        }],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
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
