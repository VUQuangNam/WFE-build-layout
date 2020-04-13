import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../config/environment';
import { HeaderConfig } from '../config';

@Injectable()
export class ServiceClient {
    constructor(
        private http: Http,
        private headerConfig: HeaderConfig
    ) { }

    get(route) {
        return this.http.get(
            environment.API_URL + route,
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

    create(route: string, data: any) {
        return this.http.post(
            environment.API_URL + route,
            data,
            this.headerConfig.requestOptions()
        ).toPromise().then(result => result.json());
    }

}
