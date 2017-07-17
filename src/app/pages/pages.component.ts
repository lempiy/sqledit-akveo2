import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { TablesService } from './tables/tables.service';

import { Subscription } from 'rxjs/Rx';

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
export class Pages implements OnInit, OnDestroy {
  cons: Subscription[];
  constructor(
    private _menuService: BaMenuService, 
    private _tables: TablesService,
  ) {
  this.cons = [];
  }

  initMenu() {
    this.cons.push(
      this._tables.getAllTables().subscribe(data => {
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
      }),
    );
  }

  ngOnInit() {
    this.initMenu();
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }
}
