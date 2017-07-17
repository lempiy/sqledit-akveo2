import { Routes, RouterModule } from '@angular/router';

import { Queries } from './queries.component';
import { ExecuteQuery } from './components/executeQuery/executeQuery.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Queries,
    children: [
      { path: 'execute', component: ExecuteQuery },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
