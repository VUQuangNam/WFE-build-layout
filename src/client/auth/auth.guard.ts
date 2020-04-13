import { Observable } from 'rxjs';
import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Utilities } from 'src/client/utils';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private utilities: Utilities
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        try {
            console.log('here');
            const token = this.utilities.getCookie('DN_ACCESS_TOKEN');

            /** check token has exists */
            if (!token) {
                this.router.navigate(['dang-nhap'], { queryParams: { returnUrl: state.url } });
                return false;
            }

            /* Step:: refresh token */
            const dateNow = moment(Date.now()).unix();
            const refreshAt = this.utilities.getCookie('DN_TOKEN_EXPIRED_AT');
            if (dateNow >= refreshAt) {
                alert('phiên đăng nhập đã hết hạn');
                this.utilities.revmoveCookie('DN_ACCESS_TOKEN');
                this.router.navigate(['dang-nhap'], { queryParams: { returnUrl: state.url } });
                return false;
            }

            return true;
        } catch (ex) {
            this.router.navigate(['dang-nhap'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
