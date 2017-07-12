import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ChangeTableService } from '../../changeTable.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indexes',
  templateUrl: './indexes.html',
  styleUrls: ['./indexes.scss'],
})
export class Indexes implements OnInit, OnDestroy {
  tableData: any;
  tabName: string;
  sub: any;
  constructor(
    protected service: ChangeTableService,
    private route: ActivatedRoute) {
    // this.smartTableData = _basicTablesService.smartTableData;
  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.tabName = params['name'];
      this.service.getData().then((data: any[]) => {
        this.tableData = data.find(table => table.name === this.tabName).indexes;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
