import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment-timezone';

@Injectable()
export class DateTimeConfig {
    constructor(
        private _datePipe: DatePipe
    ) { }

    /**
     * Convert unix to date
     * @param {Any} date
     */
    datePipe = (date: any) => moment.unix(date).toDate();

    /**
     * Convert unix to date
     * @param {Any} date
     */
    format = (date: any) => moment.unix(date).format('DD/MM/YYYY');

    /**
     * Convert unix to date time
     * @param {Any} date
     */
    formatToDateTime = (date: any) => moment.unix(date).format('DD/MM/YYYY HH:mm');

    /**
     * Conver date to unix
     * @param {String} date
     */
    convert = (date: string) => moment(date).unix();

    /**
     * Load date time append to filter
     * @param {String} type
     */
    loadFilter(type: string) {
        let current = new Date();
        switch (type) {
            case 'yesterday':
                current = new Date(current.getFullYear(), current.getMonth(), current.getDate() - 1);
                return {
                    start_time: this._datePipe.transform(current, 'MM/dd/yyyy'),
                    end_time: this._datePipe.transform(current, 'MM/dd/yyyy'),
                };
            case 'today':
                return {
                    start_time: this._datePipe.transform(current, 'MM/dd/yyyy'),
                    end_time: this._datePipe.transform(current, 'MM/dd/yyyy'),
                };
            case 'this_week': case 'last_week':
                current = type === 'this_week'
                    ? new Date(current.getFullYear(), current.getMonth(), current.getDate())
                    : new Date(current.getFullYear(), current.getMonth(), current.getDate() - 7);
                const firstDayOfWeek = current.getDate() - current.getDay();
                const lastDayOfWeek = firstDayOfWeek + 6;
                return {
                    start_time: this._datePipe.transform(current.setDate(firstDayOfWeek), 'MM/dd/yyyy'),
                    end_time: this._datePipe.transform(current.setDate(lastDayOfWeek), 'MM/dd/yyyy'),
                };
            case 'this_month': case 'last_month':
                current = type === 'this_month'
                    ? new Date(current.getFullYear(), current.getMonth(), current.getDate())
                    : new Date(current.getFullYear(), current.getMonth() - 1, current.getDate());

                const firstDayOfMonth = new Date(current.getFullYear(), current.getMonth(), 1).getTime();
                const lastDayOfMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0).getTime();
                return {
                    start_time: this._datePipe.transform(firstDayOfMonth, 'MM/dd/yyyy'),
                    end_time: this._datePipe.transform(lastDayOfMonth, 'MM/dd/yyyy')
                };
            default: return { start_time: null, end_time: null };
        }
    }
}
