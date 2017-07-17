import { Component, OnInit, OnDestroy } from '@angular/core';

import { AllViewsService } from './allViews.service';

import { DatabaseService } from '../../../database/database.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'all-views',
  templateUrl: './allViews.html',
  styleUrls: ['./allViews.scss']
})
export class AllViews implements OnInit, OnDestroy {

  query: string = '';
  cons: Subscription[];

  result: any = {
    status: '',
    violations: [],
    message: '',
  };

  clearResult() {
    this.result = {
      status: '',
      violations: [],
      message: '',
    };
  } 

  allViewData: any[];

  constructor(protected service: AllViewsService, public db: DatabaseService) {
    this.cons = [];
  }

  getAllViews() {
    this.cons.push(
      this.service.getData().subscribe(data => {
        this.allViewData = data;
      }),
    );
  }

  ngOnInit() {
    this.getAllViews();
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe())
  }

  deleteView($event) {
    this.allViewData.splice(
      this.allViewData.findIndex(view => view.name === $event.name), 
    1);
    Object.assign(this.result, {
      status: 'success',
      message: `View ${$event.name} was deleted.`,
    })
  }
}
