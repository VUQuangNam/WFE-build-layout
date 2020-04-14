import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utilities } from 'src/client/utils';

@Component({
    selector: 'vqn-header-top',
    templateUrl: './header-top.component.html',
    encapsulation: ViewEncapsulation.None
})

export class HeaderTopComponent implements OnInit {
    constructor(
        private utilities: Utilities
    ) { }

    ngOnInit() {
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
