import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthHttp {
    //mock token
    private jwt: string;

    constructor(private http: Http) {
        this.token = 'test';
    }

    get token() {
        return this.jwt || localStorage.getItem('token');
    }

    set token(token: string) {
        this.jwt = token;
        localStorage.setItem('token', token);
    }

    private opt: RequestOptionsArgs = {
        headers: new Headers({
            'X-User': this.token,
            'Content-Type': 'application/json',
        }),
    };

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(url, Object.assign({}, this.opt, options)); 
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(url, body, Object.assign({}, this.opt, options)); 
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(url, body, Object.assign({}, this.opt, options)); 
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.patch(url, body, Object.assign({}, this.opt, options)); 
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.delete(url, Object.assign({}, this.opt, options)); 
    }
}

