import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';
import { ChangeDatabaseService } from './changeDatabase.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'database',
  templateUrl: './database.html',
  styleUrls: ['./database.scss']
})
export class Database implements OnInit, OnDestroy {

  public form:FormGroup;
  public name:AbstractControl;
  private cons: Subscription[];

  public submitted:boolean = false;

  constructor(
      fb: FormBuilder, 
      public db: DatabaseService, 
      private router: Router,
      private changeDB: ChangeDatabaseService) {
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
    this.cons = [];
    this.name = this.form.controls['name'];
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.cons.forEach(c => c.unsubscribe());
  }

  usePrev() {
    this.changeDatabase(this.db.previousDataBase);
  }

  private changeDatabase(name: string) {
    this.cons.push(
      this.changeDB.applyNewDB({ name }).subscribe(
        (data) => {
          this.db.currentDataBase = name;
          this.submitted = true;
          this.router.navigate(['/pages/tables/alltables']);
        },
        (error) => {
          this.name.errors['server'] = error;
        },
      ),
    );
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this.changeDatabase(this.name.value);
    }
  }
}
