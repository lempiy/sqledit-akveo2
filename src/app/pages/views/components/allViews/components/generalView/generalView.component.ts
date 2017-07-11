import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'general-view',
  templateUrl: './generalView.html',
  styleUrls: ['./generalView.scss'],
})
export class GeneralView {
  @Input() tableData:Array<any>;
  @Output() deleteView: EventEmitter<any> = new EventEmitter();
  
  constructor() {
    // this.smartTableData = _basicTablesService.smartTableData;
  }
  delete(view) {
    this.deleteView.emit(view);
  }
}
