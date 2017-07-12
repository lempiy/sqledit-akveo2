import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { routing } from './changeTable.routing';
import { ChangeTable } from './changeTable.component';
import { ChangeTableService } from './changeTable.service';
import { Structure } from './components/structure/structure.component';
import { Edit } from './components/edit/edit.component';
import { Indexes } from './components/indexes/indexes.component';
import { EditService } from './components/edit/edit.service';
import { Views } from './components/views/views.component';

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
    ChangeTable,
    Structure,
    Edit,
    Indexes,
    Views,
  ],
  providers: [
    ChangeTableService,
    EditService,
  ],
})
export class ChangeTableModule {
}
