import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { TablesService } from './tables/tables.service';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService, private _tables: TablesService) {
  }

  ngOnInit() {
    this._tables.getData().then(data => {
      const tablesSection = PAGES_MENU
        .find(section => section.path === 'pages').children
        .find(section => section.path === 'tables');
      tablesSection.children = tablesSection.children.concat(
        data.map(table => ({
          path: [`/pages`, `tables`, `${table.name}`],
          data: {
            menu: {
              title: table.name,
              pathMatch: 'prefix',
            },
          },
        })),
      );
      this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    });
  }
}
