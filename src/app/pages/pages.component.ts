import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { TablesService } from './tables/tables.service';

import { Subscription } from 'rxjs/Rx';

import { GlobalState } from '../global.state';

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
    private _gs: GlobalState,
  ) {
  this.cons = [];
  }

  initMenu() {
    this.cons.push(
      this._tables.getAllTables().subscribe(data => {
        this._initMenu(data);
      }),
    );
  }

  addTable(tableName: string) {
    const tablesSection = <any>PAGES_MENU
      .find(section => section.path === 'pages').children
      .find(section => section.path === 'tables');
    const i = tablesSection.children.findIndex((link, index) => index > 1 && 
      link.data.menu.title > tableName);
    tablesSection.children.splice(i, 0, {
        path: [`/pages`, `tables`, `${tableName}`],
        data: {
          menu: {
            title: tableName,
            pathMatch: 'prefix',
          },
        },
    });
  }

  updateTable(data) {
    const tablesSection = <any>PAGES_MENU
      .find(section => section.path === 'pages').children
      .find(section => section.path === 'tables');
    const tableLink = tablesSection.children
      .find(link => link.data.menu.title === data.oldName);
    tablesSection.data.menu.expanded = true;
    tableLink.path = [`/pages`, `tables`, `${data.newName}`],
    tableLink.data.menu.title = data.newName;
    tableLink.data.menu.selected = true;
  }

  private _initMenu(data: any) {
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
  }

  ngOnInit() {
    this.initMenu();
    this._gs.subscribe('changed.table', (data) => {
      this.updateTable(data);
      this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    });
    this._gs.subscribe('created.table', (data) => {
      this.addTable(data);
      this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    });
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }
}
