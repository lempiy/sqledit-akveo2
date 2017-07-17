import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';

import { ChangeViewService } from './changeView.service';
import { DatabaseService } from '../../../database/database.service';
import { Subscription, Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'change-view',
  templateUrl: './changeView.html',
  styleUrls: ['./changeView.scss']
})
export class ChangeView implements OnInit, OnDestroy {

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

  changeViewData: any = {
    name: '',
    sql: '',
  };
  
  constructor(
    protected service: ChangeViewService, 
    public db: DatabaseService,
    private route: ActivatedRoute) {
    this.cons = [];
  }

  getAllViews(name: string): Observable<any> {
    return this.service.getData(name);
  }

  ngOnInit() {
    const params$ = this.route.params;
    this.cons.push(
      params$.switchMap(data => this.getAllViews(data['name'])).subscribe(data => {
        this.changeViewData = Object.assign(this.changeViewData, data);
      }),
    );
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe())
  }

  onSubmit(): void {
      Object.assign(this.result, {
        status: 'success',
        message: `View ${this.changeViewData.name} has been changed.`,
      })
  }
}
