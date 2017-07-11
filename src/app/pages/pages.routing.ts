import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { PagesGuard } from './pages.guard';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: 'app/pages/login/login.module#LoginModule'
  // },
  {
    path: 'database',
    loadChildren: 'app/pages/database/database.module#DatabaseModule'
  },
  {
    path: 'pages',
    component: Pages,
    canActivate: [PagesGuard],
    children: [
      { path: '', redirectTo: 'database', pathMatch: 'full' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'views', loadChildren: './views/views.module#ViewsModule' },
      { path: 'queries', loadChildren: './queries/queries.module#QueriesModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
