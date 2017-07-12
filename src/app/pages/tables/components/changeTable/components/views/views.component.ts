import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChangeTableService } from '../../changeTable.service';

@Component({
  selector: 'views',
  templateUrl: './views.html',
  styleUrls: ['./views.scss']
})
export class Views implements OnInit, OnDestroy {

  query: string = '';
  sub: any;
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

  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.tabName = params['name'];
      this.service.getData().then((data: any[]) => {
        this.allViewData = data.find(table => table.name === this.tabName).views;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
