import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'database',
  templateUrl: './database.html',
  styleUrls: ['./database.scss']
})
export class Database {

  public form:FormGroup;
  public name:AbstractControl;

  public submitted:boolean = false;

  constructor(fb:FormBuilder, public db: DatabaseService, private router: Router) {
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });

    this.name = this.form.controls['name'];
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      this.db.currentDataBase = this.name.value;
      this.router.navigate(['/pages/tables/alltables']);
      this.submitted = true;
    }
  }
}
