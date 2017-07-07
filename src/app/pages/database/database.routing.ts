import { Routes, RouterModule }  from '@angular/router';

import { Database } from './database.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Database
  }
];

export const routing = RouterModule.forChild(routes);
