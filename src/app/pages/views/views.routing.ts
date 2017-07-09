import { Routes, RouterModule } from '@angular/router';

import { Views } from './views.component';
import { AllViews } from './components/allViews/allViews.component';
import { AddView } from './components/addView/addView.component';
import { ChangeView } from './components/changeView/changeView.component';
import { TableViews } from './components/tableViews/tableViews.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Views,
    children: [
      { path: 'allviews', component: AllViews },
      { path: 'addview', component: AddView },
      { path: 'changeview/:name', component: ChangeView },
      { path: 'table/:name', component: TableViews },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
