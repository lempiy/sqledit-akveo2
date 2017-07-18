import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from '../auth.service';

@Injectable()
export class ViewsService {

    constructor(private http: AuthHttp) {

    }

    getAllViews(): Observable<any> {
        return this.http.get('/tables/views').map(response => response.json());
    }

    createView(data: Creator): Observable<any> {
        return this.http.post('/tables/view', data).map(response => response.json());
    }

    updateView(data: Creator): Observable<any> {
        return this.http.put('/tables/view', data).map(response => response.json());
    }

    deleteView(viewName: string): Observable<any> {
        return this.http.delete('/tables/view', { body: { name: viewName } })
            .map(response => response.json());
    }
}

class Creator {
    sql: string;
    name: string;
}
