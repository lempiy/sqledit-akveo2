import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from '../auth.service';

@Injectable()
export class QueriesService {
    
    constructor(private http: AuthHttp) {

    }

    executeQuery(query: string) {
        return this.http.patch('/query/execute', { query }).map(data => data.json());
    }
}
