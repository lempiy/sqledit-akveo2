import { Injectable } from '@angular/core';
import { AuthHttp } from '../auth.service';
import 'rxjs/add/operator/map';


class Data {
    name: string;
}

@Injectable()
export class ChangeDatabaseService {
    constructor(private http: AuthHttp) {

    }
    applyNewDB(data: Data) {
        return this.http.post('/db/set', data)
            .map(response => {
                response.json();
            });
    }
}
