import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { routing } from './queries.routing';
import { Queries } from './queries.component';
import { ExecuteQuery } from './components/executeQuery/executeQuery.component';
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
    ExecuteQuery,
  ],
  providers: [
    QueriesService,
    TablesService,
  ],
})
export class QueriesModule {
}
