import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { PagesGuard } from './pages.guard';
import { TablesService } from './tables/tables.service';

import { AuthHttp } from './auth.service';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  declarations: [Pages],
  providers: [PagesGuard, TablesService, AuthHttp],
})
export class PagesModule {
}
