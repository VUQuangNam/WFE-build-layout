import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/** private variable */
declare let KTApp: any;

@Injectable()
export class Utilities {
    constructor(
        private router: Router,
    ) { }

    setCookie(name: string, value: string, exdays: number) {
        const date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + date.toUTCString();
        document.cookie = name + '=' + value + ';' + expires + ';path=/';
    }

    getCookie(name: string) {
        const item = document.cookie.split(';').filter(x => x.includes(name));
        return !item[0] ? null : item[0].split('=')[1];
    }

    revmoveCookie(name: string) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return true;
    }

    exportToExecel = (fileName, template) => {
        const target = document.createElement('a');
        const type = 'data:application/vnd.ms-excel;charset=utf-8';
        target.href = type + ',' + encodeURIComponent(template);
        target.download = fileName;
        target.click();
    }

    openLoading = (state?: string, message?: string) => {
        KTApp.block(
            'body',
            {
                overlayColor: '#000000',
                type: 'loader',
                state: state || 'danger',
                message: message || 'Đang tải dữ liệu'
            }
        );
    }

    closeLoading = () => KTApp.unblock('body');
}
