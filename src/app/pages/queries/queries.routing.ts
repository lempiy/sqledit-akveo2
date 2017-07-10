import { Routes, RouterModule } from '@angular/router';

import { Queries } from './queries.component';
import { AllViews } from './components/allViews/allViews.component';
import { ExecuteQuery } from './components/executeQuery/executeQuery.component';
import { AddRow } from './components/addRow/addRow.component';
import { UpdateRow } from './components/updateRow/updateRow.component';
import { DeleteRow } from './components/deleteRow/deleteRow.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Queries,
    children: [
      { path: 'deleterow', component: DeleteRow },
      { path: 'execute', component: ExecuteQuery },
      { path: 'addrow', component: AddRow },
      { path: 'updaterow', component: UpdateRow },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
