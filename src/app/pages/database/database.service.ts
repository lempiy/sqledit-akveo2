import {Injectable} from '@angular/core';

@Injectable()
export class DatabaseService {
    private _previousDB: string;
    private _currentDB: string;
    
    constructor() {
        this._previousDB = localStorage.getItem('prev_db');
    }

    get previousDataBase() {
        return this._previousDB;
    }

    set previousDataBase(db: string) {
        if (db) {
            localStorage.setItem('prev_db', db);
            this._previousDB = db;
        }
    }

    get currentDataBase() {
        return this._currentDB || localStorage.getItem('cur_db');
    }

    set currentDataBase(db: string) {
        if (db) {
            localStorage.setItem('cur_db', db);
            this._currentDB = db;
            this.previousDataBase = db;
        }
    }
}
