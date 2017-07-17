import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from '../auth.service';

@Injectable()
export class TablesService {

    constructor(private http: AuthHttp) {

    }

    getAllTables(): Observable<any> {
        return this.http.get('/tables/all').map(response => response.json());
    }

    getTable(name: string): Observable<any> {
        return this.http.get(`/tables/table/${name}`).map(response => response.json());
    }

    getPragma(name: string): Observable<any> {
        const body = {
            'query': `PRAGMA table_info(${name});`,
        };
        return this.http.patch(`/query/execute`, body).map(response => response.json());
    }

    getRows(name: string): Observable<any> {
        const body = {
            'query': `SELECT * FROM ${name};`,
        };
        return this.http.patch(`/query/execute`, body).map(response => response.json());
    }

    getIndexes(name: string) {
        return this.http.get(`/tables/indexes/${name}`).map(response => response.json());
    }

    deleteTable(name: string) {
        return this.http.delete(`/tables/table`, { body: { name } }).map(response => 
            response.json());
    }

    updateTableName(oldName: string, newName: string) {
        return this.http.put(`/tables/table`, { 
            table_name: oldName,
            new_table_name: newName,
        }).map(data => data.json());
    }
}
