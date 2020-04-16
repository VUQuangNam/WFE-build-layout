import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utilities } from 'src/client/utils';
import { AccountService } from 'src/client/services';
import { User } from 'src/client/models';

/** private variable */
declare let swal: any;

@Component({
    selector: 'vqn-header-top',
    templateUrl: './header-top.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [
        AccountService
    ]
})

export class HeaderTopComponent implements OnInit {
    constructor(
        private utilities: Utilities,
        private accountService: AccountService
    ) { }

    model: any;

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

    logout = () => {
        /** remove session for user */
        this.utilities.revmoveCookie('DN_ACCESS_TOKEN');
        this.utilities.revmoveCookie('DN_TOKEN_EXPIRED_AT');
        this.utilities.revmoveCookie('DN_REFRESH_TOKEN');

        /** redirect to login component */
        return window.location.href = '/dang-nhap';
    }
}
