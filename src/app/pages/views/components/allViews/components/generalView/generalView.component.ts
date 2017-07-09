import { Component, Input } from '@angular/core';

@Component({
  selector: 'general-table',
  templateUrl: './generalView.html',
  styleUrls: ['./generalView.scss'],
})
export class GeneralView {
  @Input() tableData:Array<any>;
  
  constructor() {
    // this.smartTableData = _basicTablesService.smartTableData;
  }
}
