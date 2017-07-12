import { Component, OnInit, OnDestroy } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { DatabaseService } from '../../../database/database.service';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'change-table',
  templateUrl: './changeTable.html',
  styleUrls: ['./changeTable.scss']
})
export class ChangeTable implements OnInit, OnDestroy  {
  sub: any;
  tabName: string;
  constructor(public db: DatabaseService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.tabName = params['name'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
