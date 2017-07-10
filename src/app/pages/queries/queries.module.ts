import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { routing } from './queries.routing';
import { Queries } from './queries.component';
import { AllViews } from './components/allViews/allViews.component';
import { AllViewsService } from './components/allViews/allViews.service';
import { ExecuteQuery } from './components/executeQuery/executeQuery.component';
import { ExecuteQueryService } from './components/executeQuery/executeQuery.service';
import { AddRow } from './components/addRow/addRow.component';
import { AddRowService } from './components/addRow/addRow.service';
import { DeleteRow } from './components/deleteRow/deleteRow.component';
import { DeleteRowService } from './components/deleteRow/deleteRow.service';
import { UpdateRow } from './components/updateRow/updateRow.component';
import { UpdateRowService } from './components/updateRow/updateRow.service';
import { TableViews } from './components/tableViews/tableViews.component';
import { TableViewsService } from './components/tableViews/tableViews.service';
import { GeneralView } from './components/allViews/components/generalView';
import { QueriesService } from './queries.service';
import { TablesService } from '../tables/tables.service';

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
    Queries,
    AllViews,
    ExecuteQuery,
    GeneralView,
    AddRow,
    TableViews,
    UpdateRow,
    DeleteRow,
  ],
  providers: [
    AllViewsService,
    ExecuteQueryService,
    AddRowService,
    QueriesService,
    TableViewsService,
    TablesService,
    UpdateRowService,
    DeleteRowService,
  ],
})
export class QueriesModule {
}
