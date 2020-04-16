import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/client/services';
import { User } from 'src/client/models';

/** private variable */
declare let swal: any;

@Component({
    selector: '.vqn-container .vqn-body .vqn-grid .vqn-grid--ver',
    templateUrl: './account.component.html',
    providers: [
        AccountService
    ]
})
export class AccountComponent implements OnInit {
    model: any = {};
    loading = false;
    invalid = true;

    constructor(
        private accountService: AccountService,
    ) { }

    async ngOnInit() {
        try {
            /** load data from service */
            const respone = await this.accountService.profile();
            if (respone.code) return swal.fire('Hệ Thống', respone.message, 'warning');
            this.model = respone.user as User[];
            this.model.start_date = new Date(this.model.start_date * 1000);
            if (this.model.birthday) {
                this.model.birthday = new Date(this.model.birthday * 1000);
            }
            return this.model;
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }

    }
}
