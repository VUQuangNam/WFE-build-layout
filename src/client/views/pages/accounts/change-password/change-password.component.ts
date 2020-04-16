import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/client/services';
import { User } from 'src/client/models';
import { Utilities } from 'src/client/utils';

/** private variable */
declare let swal: any;

@Component({
    selector: '.vqn-container .vqn-body .vqn-grid .vqn-grid--ver',
    templateUrl: './change-password.component.html',
    providers: [
        AccountService,
    ]
})
export class ChangePasswordComponent implements OnInit {
    usermodel: any = {};
    loading = false;
    invalid = true;

    constructor(
        private accountService: AccountService,
        private utilities: Utilities
    ) { }

    async ngOnInit() {
        try {
            /** load data from service */
            const respone = await this.accountService.profile();
            if (respone.code) return swal.fire('Hệ Thống', respone.message, 'warning');
            this.usermodel = respone.user as User[];
            return this.usermodel;
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }

    }

    updatePassword = (f) => {
        this.invalid = f.valid;
        if (this.usermodel.newPass !== this.usermodel.confirmnewPass) return false;
        if (this.invalid) {
            swal.fire({
                title: 'Cập Nhật Mật Khẩu',
                type: 'warning',
                text: 'Bạn chắc chắn rằng mình muốn cập nhật mật khẩu của mình không?',
                showCancelButton: true,
                confirmButtonText: 'Đồng ý!',
                cancelButtonText: 'Từ bỏ!'
            }).then(async result => {
                try {
                    if (result.value) {
                        this.loading = true;
                        const respone = await this.accountService.changePass(this.usermodel.oldPass, this.usermodel.newPass);
                        if (respone.code) {
                            return swal.fire('Hệ Thống', respone.message, 'warning');
                        }
                        return swal.fire('Thành Công', 'Cập nhật mật khẩu thành công!', 'success'), this.logout();
                    }
                } catch (ex) {
                    /*begin:: write log ex here: break*/
                    throw new Error(ex);
                } finally {
                    this.loading = false;
                }
            });
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
