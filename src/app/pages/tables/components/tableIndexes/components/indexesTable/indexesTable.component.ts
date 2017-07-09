import { Component, Input } from '@angular/core';

@Component({
  selector: 'indexes-table',
  templateUrl: './indexesTable.html',
  styleUrls: ['./indexesTable.scss'],
})
export class IndexesTable {
  @Input() tableData:Array<any>;
  
  constructor() {
    // this.smartTableData = _basicTablesService.smartTableData;
  }
}
