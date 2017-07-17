import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeTableService } from '../../changeTable.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'indexes',
  templateUrl: './indexes.html',
  styleUrls: ['./indexes.scss'],
})
export class Indexes implements OnInit, OnDestroy {
  tableData: any;
  tabName: string;
  cons: Subscription[];
  constructor(
    protected service: ChangeTableService,
    private route: ActivatedRoute) {
    // this.smartTableData = _basicTablesService.smartTableData;
    this.cons = [];
  }

  getData(name: string) {
    this.cons.push(
      this.service.getIndexes(name).subscribe(data => this.tableData = data),
    );
  }

  ngOnInit() {
    this.cons.push(this.route.parent.params.subscribe(params => {
        this.tabName = params['name'];
        this.getData(this.tabName);
      }),
    );
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }
}
