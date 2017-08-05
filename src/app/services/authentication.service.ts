import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.service';
import { HttpClient } from './httpclient';
import { UrlBuilder } from './urlbuilder';
import { UserModel } from '../models/user.model';
import { Actions } from '../actions';

@Injectable()
export class AuthenticationService {
    constructor(private store: Store<AppState>, private http: HttpClient, private urlBuilder: UrlBuilder) {}

    authenticate(credentials: {phoneNumber: string, password: string}): void {
        let authUrl = this.urlBuilder.authUrl();
        this.http.postWithoutAuth(authUrl, credentials)
            .subscribe((response: {token: string, user: UserModel}) => {
                this.store.dispatch({type: Actions.SET_AUTH_TOKEN, payload: response.token});
                this.store.dispatch({type: Actions.SET_USER, payload: response.user});
            });
    }
}