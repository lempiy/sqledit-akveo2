import {Injectable} from '@angular/core';

@Injectable()
export class TablesService {
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


  allTableData = [
    {
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
        indexes: [
            {
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
            },
            {
                name: 'index_email',
                unique: true,
                partial: false,
                columns: [
                    {
                        name: 'id',
                    },
                    {
                        name: 'email',
                    },
                ],
            },
        ],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
    },
    {
        name: 'user_order',
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
            ],
        }],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
    },
    {
        name: 'location',
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
            ],
        }],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
    },
    {
        name: 'product',
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
            ],
        }],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
    },
    {
        name: 'location_user',
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
            ],
        }],
        views: null,
    },
    {
        name: 'tag',
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
            ],
        }],
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
    },
    {
        name: 'post',
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
        indexes: null,
        views: [{
            name: 'Old Users',
            sql: `CREATE VIEW [Old Users] AS
                SELECT id, username
                FROM user
                WHERE created_at >= #1/20/2015#`,
        }],
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
