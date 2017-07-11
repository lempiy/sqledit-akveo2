
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { DatabaseService } from './database/database.service';

@Injectable()

export class PagesGuard implements CanActivate {
    constructor(private db: DatabaseService, private router: Router){

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.db.currentDataBase) {
            return true;
        } else {
            console.log("User has no current DB")
            this.router.navigate(['/database']);
            return false;
        }
    }
}