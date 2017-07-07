import { Component, Input } from '@angular/core';

@Component({
  selector: 'general-table',
  templateUrl: './generalTable.html'
})
export class GeneralTable {
  @Input() tableData:Array<any>;
  
  constructor() {
    // this.smartTableData = _basicTablesService.smartTableData;
  }
}
