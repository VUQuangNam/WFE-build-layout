import { Injectable, } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Utilities } from '../utils';

@Injectable()
export class HeaderConfig {
    constructor(
        private utilities: Utilities
    ) { }

    requestOptions() {
        /** get session */
        const token = this.utilities.getCookie('DN_ACCESS_TOKEN');

        /** append to headers */
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-Control', 'no-cache');
        headers.append('Authorization', `Bearer ${token}`);

        /** convert to header options */
        return new RequestOptions({ headers: headers });
    }

    loadJwtToken = () => {
        /** get session */
        const token = this.utilities.getCookie('DN_ACCESS_TOKEN');
        return `Bearer ${token}`;
    }
}
