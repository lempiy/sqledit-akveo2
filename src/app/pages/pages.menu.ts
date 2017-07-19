export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'alltables',
            data: {
              menu: {
                icon: 'ion-more',
                title: 'general.menu.all_tables',
              }
            }
          },
          {
            path: 'addtable',
            data: {
              menu: {
                icon: 'ion-plus-round',
                title: 'general.menu.add_table',
              }
            }
          },
          {
            path: 'indexes',
            data: {
              menu: {
                title: 'general.menu.indexes',
                pathMatch: 'prefix',
                hidden: true,
              }
            }
          },
        ]
      },
      {
        path: 'views',
        data: {
          menu: {
            title: 'general.menu.views',
            icon: 'ion-eye',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'allviews',
            data: {
              menu: {
                title: 'general.menu.all_views',
              }
            }
          },
          {
            path: 'addview',
            data: {
              menu: {
                title: 'general.menu.add_view',
              }
            }
          },
          {
            path: 'changeview',
            data: {
              menu: {
                title: 'general.menu.change_view',
                pathMatch: 'prefix',
                hidden: true,
              }
            }
          },
          {
            path: 'table',
            data: {
              menu: {
                title: 'general.menu.table_views',
                pathMatch: 'prefix',
                hidden: true,
              }
            }
          },
        ]
      },
      {
        path: 'queries',
        data: {
          menu: {
            title: 'general.menu.queries',
            icon: 'ion-code-working',
            selected: false,
            expanded: false,
            order: 501,
          }
        },
        children: [
          {
            path: 'execute',
            data: {
              menu: {
                title: 'general.menu.execute_query',
              }
            }
          },
        ]
      },
    ]
  }
];
