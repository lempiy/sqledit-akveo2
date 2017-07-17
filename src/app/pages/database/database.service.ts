import {Injectable} from '@angular/core';
// import { AuthHttp } from '../authHttp.service';
// import 'rxjs/add/operator/map';

@Injectable()
class Data {
    name: string;
}
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

    // applyNewDB(data: Data) {
    //     return this.http.post('/db/set', data)
    //         .map(response => response.json());
    // }
}
