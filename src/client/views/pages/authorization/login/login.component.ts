import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import * as moment from 'moment-timezone';
import { Utilities } from 'src/client/utils';
import { AuthService, ScriptLoaderService } from '../../../../services';


/** private variable */
declare let swal: any;

@Component({
    selector: '.vqn-grid .vqn-grid--ver .vqn-grid--root .vqn-page',
    templateUrl: './login.component.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        AuthService
    ]
})

export class LoginComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private scriptService: ScriptLoaderService,
        private utilities: Utilities
    ) { }

    /** variable */
    model: any = {};
    modelSignUp: any = {};
    invalid = true;
    isSignin = false;
    loading = false;

    ngOnInit() {
        this.scriptService.loadScripts('body', [
            /** begin::Global Theme Bundle(used by all pages) */
            '/assets/vendors/global/vendors.bundle.js',
            // '/assets/jquery/bundles/scripts.bundle.js',
            /** end::Global Theme Bundle(used by all pages) */

            /** begin::Page Vendors(used by this page) */
            // '/assets/vendors/custom/fullcalendar/fullcalendar.bundle.js',
            /** end::Page Vendors */

            /** * begin::Page Scripts(used by this page)  */
            // '/assets/jquery/bundles/pages/dashboard.js',
            /** * end::Page Scripts(used by this page)  */
        ], true).then(result => {
            // do something here
        });
        const ascessToken = this.utilities.getCookie('DN_ACCESS_TOKEN');
        if (ascessToken) return window.location.href = '/';
    }

    login = async (f: any) => {
        try {
            this.invalid = f.valid;
            if (!this.invalid) return;
            const respone = await this.authService.login(this.model.username, this.model.password);
            if (respone.code) return alert(respone.message);
            const token = respone.token;
            const user = respone.user;

            /** add session for user */
            const isAdmin = user.permissions.find(x => x.id === 'superadmin');
            this.utilities.setCookie('DN_ACCESS_GROUP', isAdmin ? 'ADMIN' : 'MEMBER', 30);
            this.utilities.setCookie('DN_TOKEN_EXPIRED_AT', moment(token.access.expired_at).unix(), 1);
            this.utilities.setCookie('DN_REFRESH_TOKEN', token.refresh.token, 30);
            this.utilities.setCookie('DN_ACCESS_TOKEN', token.access.token, 30);

            /** setup default data for application */
            localStorage.setItem('stores', JSON.stringify(user.stores));
            localStorage.setItem('user', JSON.stringify(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    avatar: user.avatar
                }
            ));

            return window.location.href = '/';
        } catch (ex) {
            /** begin:: write log ex here: break */
            throw new Error(ex);
        }
    }

    signUp = async () => {
        swal.fire({
            title: 'Thêm Mới Khách Hàng',
            text: 'Bạn có chắc chắn rằng mình muốn thêm mới khách hàng này.?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Tôi đồng ý!',
            cancelButtonText: 'Từ bỏ!'
        }).then(async result => {
            try {
                if (result.value) {
                    this.loading = true;
                    swal.fire('Hệ Thống', 'Đăng ký thành công.!', 'success');
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        });

    }

}
