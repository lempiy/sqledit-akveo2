import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sy-status',
  templateUrl: './syStatus.html',
  styleUrls: ['./syStatus.scss']
})
export class SyStatus {
    @Input() violations: any[];
    @Input() status: string;
    @Input() message: string;
    @Output() clearMessage = new EventEmitter<any>();
    
    constructor() {
    }
    close() {
        this.clearMessage.emit();
    }
}
