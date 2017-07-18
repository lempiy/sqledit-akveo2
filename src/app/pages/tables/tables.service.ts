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

    createNewColumn(tableName: string, fieldName: string, ddl: string[]) {
        return this.http.post('/tables/column', {
            table_name: tableName,
            field_name: fieldName,
            ddl: ddl.join(' '),
        }).map(data => data.json());
    }

    addRow(tableName: string, rowData: any[]) {
        return this.http.post('/query/row', {
            table_name: tableName,
            data: rowData,
        }).map(data => data.json());
    }

    editRow(tableName: string, rowData: any[], where: string) {
        return this.http.put('/query/row', {
            table_name: tableName,
            data: rowData,
            where,
        }).map(data => data.json());
    }

    deleteRow(tableName: string, where: string) {
        return this.http.delete('/query/row', { body: {
            table_name: tableName,
            where,
        }}).map(data => data.json());
    }

    createTable(table: any) {
        return this.http.post('/tables/table', table).map(data => data.json());
    }
}
