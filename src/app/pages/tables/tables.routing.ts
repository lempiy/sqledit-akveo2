import { Routes, RouterModule } from '@angular/router';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { AllTables } from './components/allTables/allTables.component';
import { AddTable } from './components/addTable/addTable.component';
import { ChangeTable } from './components/changeTable/changeTable.component';
import { TableIndexes } from './components/tableIndexes/tableIndexes.component';
import { DataTables } from './components/dataTables/dataTables.component';
import { HotTablesComponent } from './components/hotTables/hotTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'alltables', component: AllTables },
      { path: 'addtable', component: AddTable },
      { path: ':name', loadChildren: './components/changeTable/changeTable.module#ChangeTableModule' },
      { path: 'indexes/:name', component: TableIndexes },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
