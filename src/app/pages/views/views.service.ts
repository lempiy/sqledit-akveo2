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
}
