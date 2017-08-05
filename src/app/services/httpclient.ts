import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app.state';
import { rootReducers } from '../app.reducers';

@Injectable()
export class HttpClient {
    constructor(private http: Http, private store: Store<AppState>) {}

    get(url: string): Observable<any> {
        return this.store.select(rootReducers.authToken)
            .switchMap(authToken => {
                let headers = this.createAuthHeaders(authToken);
                return this.http.get(url, {headers});
            });
    }

    post(url: string, body: any): Observable<any> {
        return this.store.select(rootReducers.authToken)
            .switchMap(authToken => {
                let headers = this.createAuthHeaders(authToken);
                return this.http.post(url, body, {headers});
            });
    }

    postWithoutAuth(url: string, body: any): Observable<any> {
        return this.http.post(url, body);
    }

    put(url: string, body: any): Observable<any> {
        return this.store.select(rootReducers.authToken)
            .switchMap(authToken => {
                let headers = this.createAuthHeaders(authToken);
                return this.http.put(url, body, {headers});
            });
    }

    private createAuthHeaders(authToken: string): Headers {
        let headers = new Headers();
        headers.append('Authorization', authToken);
        return headers;
    }
}