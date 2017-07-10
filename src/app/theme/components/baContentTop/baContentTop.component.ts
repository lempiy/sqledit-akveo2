import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

import {DatabaseService} from '../../../pages/database/database.service';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor(private _state:GlobalState, public db: DatabaseService) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
