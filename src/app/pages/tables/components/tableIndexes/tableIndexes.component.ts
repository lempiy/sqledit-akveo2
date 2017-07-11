import { Component } from '@angular/core';

import { TableIndexesService } from './tableIndexes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'table-indexes',
  templateUrl: './tableIndexes.html',
  styleUrls: ['./tableIndexes.scss']
})
export class TableIndexes {

  query: string = '';
  private sub: any;
  private tabName: string;

  tableIndexesData: any[];

  constructor(
    protected service: TableIndexesService, 
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.tabName = params['name'];
      this.service.getData(this.tabName).then((data: any[]) => {
        this.tableIndexesData = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
