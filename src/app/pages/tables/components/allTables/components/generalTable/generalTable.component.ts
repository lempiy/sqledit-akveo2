import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'general-table',
  templateUrl: './generalTable.html',
  styleUrls: ['./generalTable.scss'],
})
export class GeneralTable {
  @Input() tableData:Array<any>;
  @Output() deleteTable: EventEmitter<any> = new EventEmitter();
  
  constructor() {
    // this.smartTableData = _basicTablesService.smartTableData;
  }

  delete(table) {
    this.deleteTable.emit(table);
  }
}
