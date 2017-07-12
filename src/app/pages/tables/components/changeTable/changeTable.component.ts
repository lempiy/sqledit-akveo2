import { Component} from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { DatabaseService } from '../../../database/database.service';

@Component({
  selector: 'change-table',
  templateUrl: './changeTable.html',
  styleUrls: ['./changeTable.scss']
})
export class ChangeTable {
  constructor(public db: DatabaseService) {
    
  }
}
