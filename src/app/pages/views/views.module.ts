import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { routing } from './views.routing';
import { Views } from './views.component';
import { AllViews } from './components/allViews/allViews.component';
import { AllViewsService } from './components/allViews/allViews.service';
import { AddView } from './components/addView/addView.component';
import { AddViewService } from './components/addView/addView.service';
import { ChangeView } from './components/changeView/changeView.component';
import { ChangeViewService } from './components/changeView/changeView.service';
import { TableViews } from './components/tableViews/tableViews.component';
import { TableViewsService } from './components/tableViews/tableViews.service';
import { GeneralView } from './components/allViews/components/generalView';
import { ViewsService } from './views.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
  ],
  declarations: [
    Views,
    AllViews,
    AddView,
    GeneralView,
    ChangeView,
    TableViews,
  ],
  providers: [
    AllViewsService,
    AddViewService,
    ChangeViewService,
    ViewsService,
    TableViewsService,
  ],
})
export class ViewsModule {
}
