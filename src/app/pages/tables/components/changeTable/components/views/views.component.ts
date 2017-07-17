import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ChangeTableService } from '../../changeTable.service';

@Component({
  selector: 'views',
  templateUrl: './views.html',
  styleUrls: ['./views.scss']
})
export class Views implements OnInit, OnDestroy {

  query: string = '';
  cons: Subscription[];
  tabName: string;

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

  constructor(
    protected service: ChangeTableService,
    private route: ActivatedRoute) {
      this.cons = [];
  }

  getData(name: string) {
    this.cons.push(
      this.service.getTable(name).subscribe(data => this.allViewData = data ? 
        data.views : []),
    );
  }

  ngOnInit() {
    this.cons.push(this.route.parent.params.subscribe(params => {
        this.tabName = params['name'];
      }),
    );
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  deleteView($event) {
    this.allViewData.splice(
      this.allViewData.findIndex(view => view.name === $event.name), 
    1);
    Object.assign(this.result, {
      status: 'success',
      message: `View ${$event.name} was deleted.`,
    });
  }
}
