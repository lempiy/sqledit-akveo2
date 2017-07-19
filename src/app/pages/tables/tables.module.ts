import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';

import { routing } from './tables.routing';
import { Tables } from './tables.component';
import { AllTables } from './components/allTables/allTables.component';
import { AllTablesService } from './components/allTables/allTables.service';
import { AddTable } from './components/addTable/addTable.component';
import { AddTableService } from './components/addTable/addTable.service';
import { GeneralTable } from './components/allTables/components/generalTable';

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
    HotTableModule,
  ],
  declarations: [
    Tables,
    AllTables,
    AddTable,
    GeneralTable,
  ],
  providers: [
    AllTablesService,
    AddTableService,
  ],
})
export class TablesModule {
}
