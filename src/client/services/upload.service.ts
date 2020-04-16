import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderConfig } from '../config';
import { environment } from '../config/environment';

@Injectable()
export class UploadService {
    constructor(
        private http: HttpClient,
        private headerConfig: HeaderConfig
    ) { }

    uploadSingle(formData: any, group: string) {
        return this.http.post(
            environment.API_URL + '/v1/images/upload-single?group=' + group,
            formData,
            {
                headers: {
                    Authorization: this.headerConfig.loadJwtToken()
                }
            },
        ).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }
}
