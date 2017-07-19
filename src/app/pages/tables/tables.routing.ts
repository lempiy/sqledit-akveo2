import { Routes, RouterModule } from '@angular/router';

import { Tables } from './tables.component';
import { AllTables } from './components/allTables/allTables.component';
import { AddTable } from './components/addTable/addTable.component';
import { ChangeTable } from './components/changeTable/changeTable.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'alltables', component: AllTables },
      { path: 'addtable', component: AddTable },
      { path: ':name', loadChildren: './components/changeTable/changeTable.module#ChangeTableModule' },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
