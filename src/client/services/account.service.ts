import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../config/environment';
import { HeaderConfig } from '../config';
import { User } from '../models';

@Injectable()
export class AccountService {
    constructor(
        private http: Http,
        private headerConfig: HeaderConfig
    ) { }

    /**
     * Profile
     */
    profile() {
        return this.http.get(
            environment.API_URL + '/v1/account',
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

    /**
     * Update profile
     * @param {User} data
     */
    update(data: User) {
        return this.http.put(
            environment.API_URL + '/v1/account',
            data,
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

    /**
     * Reset password
     * @param {String} type
     * @param {Number} code
     * @param {String} phone
     * @param {String} password
     */
    resetPass(type: string, code: number, phone: string, password: string) {
        return this.http.post(
            environment.API_URL + '/v1/account/reset-password',
            { type, code, phone, password }
        ).toPromise().then(result => result.json());
    }

    /**
     * Change phone number
     * @param {String} type
     * @param {Number} code
     * @param {String} phone
     */
    changePhone(type: string, code: number, phone: string) {
        return this.http.post(
            environment.API_URL + '/v1/account/change-phone',
            { type, code, phone },
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

    /**
     * Change email address
     * @param {String} type
     * @param {Number} code
     * @param {String} email
     */
    changeEmail(type: string, code: number, email: string) {
        return this.http.post(
            environment.API_URL + '/v1/account/change-email',
            { type, code, email },
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

    /**
     * Change password
     * @param {String} oldPass
     * @param {String} newPass
     */
    changePass(oldPass: string, newPass: string) {
        return this.http.post(
            environment.API_URL + '/v1/account/change-password',
            {
                password: oldPass,
                new_password: newPass
            },
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }
}
