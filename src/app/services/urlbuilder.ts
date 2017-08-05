import { Injectable } from '@angular/core';

const SCHEME = 'http';
const HOST = '192.241.234.235';
const PORT = '8080';
const CONTEXT = '/api';

const AUTH_PATH = '/auth';
const USER_PATH = '/user';

@Injectable()
export class UrlBuilder {
    authUrl(): string {
        let fqdn = this.formFqdn();
        return `${fqdn}${AUTH_PATH}`;
    }

    userUrl(userId: string): string {
        let fqdn = this.formFqdn();
        return `${fqdn}${USER_PATH}/${userId}`;
    }

    private formFqdn(): string {
        return `${SCHEME}://${HOST}:${PORT}${CONTEXT}`;
    }
}
