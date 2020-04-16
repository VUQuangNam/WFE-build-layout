import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../config/environment';
import { HeaderConfig } from '../config';

@Injectable()
export class AuthService {
    constructor(
        private http: Http,
        private headerConfig: HeaderConfig
    ) { }
    /**
     * Login with vqn account
     *
     * @param username
     * @param password
     */
    login(username: string, password: string) {
        return this.http.post(
            environment.API_URL + '/v1/auth/login',
            {
                username,
                password
            }
        ).toPromise().then(result => result.json());
    }

    /**
     * Logout from vqn
     */
    logout() {
        return this.http.post(
            environment.API_URL + '/v1/auth/login',
            null,
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

}
