import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Database } from './database.component';
import { DatabaseService } from './database.service';
import { routing }       from './database.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Database
  ],
  providers: [
    DatabaseService,
  ]
})
export class DatabaseModule {}
