import { Routes, RouterModule } from '@angular/router';

import { ChangeTable } from './changeTable.component';
import { Structure } from './components/structure/structure.component';

import { Edit } from './components/edit/edit.component';
import { Indexes } from './components/indexes/indexes.component';
import { Views } from './components/views/views.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChangeTable,
    children: [
      { path: '', redirectTo: 'structure', pathMatch: 'full' },
      { path: 'structure', component: Structure },
      { path: 'edit', component: Edit },
      { path: 'indexes', component: Indexes },
      { path: 'views', component: Views },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
