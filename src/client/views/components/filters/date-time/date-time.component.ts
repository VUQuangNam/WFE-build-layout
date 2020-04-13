import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DateTimeConfig } from 'src/client/config';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
declare let swal: any;

@Component({
    selector: 'sss-date-filter-group',
    templateUrl: './date-time.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [
        DatePipe,
        DateTimeConfig
    ]
})

export class GroupDateTimeComponent implements OnInit {
    constructor(
        private dateConfig: DateTimeConfig,
        private route: ActivatedRoute,
        private datePipe: DatePipe,
        private router: Router,
    ) { }

    /** public variable */
    @Input() component: string;
    @Input() path: string;

    /** variable */
    params: any = {};
    filters = [
        {
            name: 'Tất Cả',
            value: 'all',
            active: true,
        },
        {
            name: 'Hôm qua',
            value: 'yesterday',
            active: false,
        },
        {
            name: 'Hôm nay',
            value: 'today',
            active: false,
        },
        {
            name: 'Tuần này',
            value: 'this_week',
            active: false,
        },
        {
            name: 'Tuần trước',
            value: 'last_week',
            active: false,
        },
        {
            name: 'Tháng này',
            value: 'this_month',
            active: false,
        },
        {
            name: 'Tháng trước',
            value: 'last_month',
            active: false,
        }
    ];

    ngOnInit() {
        this.route.queryParamMap.subscribe(async (queryParams: Params) => {
            return this.params = queryParams.params;
        });
    }

    onChangeType(type) {
        try {
            const date = this.dateConfig.loadFilter(type);
            const params = { start_time: null, end_time: null };
            params.start_time = date.start_time;
            params.end_time = date.end_time;

            /* begin::Add old params to new param */
            Object.keys(this.params).map(param => {
                if (
                    param !== 'start_time' &&
                    param !== 'end_time'
                ) params[param] = this.params[param];
            });
            /* end:: Setup params redirect to url */

            return this.params = params,
                this.navigation(this.params);
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }

    onChangeDate(input) {
        if (!input) return;
        /*begin:: Setup params */
        const params = { start_time: null, end_time: null };
        params.start_time = this.datePipe.transform(input[0], 'MM/dd/yyyy');
        params.end_time = this.datePipe.transform(input[1], 'MM/dd/yyyy');
        Object.keys(this.params).map(param => {
            if (
                param !== 'start_time'
                && param !== 'end_time'
            ) params[param] = this.params[param];
        });
        /*end:: Setup params */
        return this.params = params,
            this.navigation(params);
    }

    navigation(params: any) {
        try {
            /*begin:: Setup params */
            params.page = params.page
                ? params.page = parseInt(params.page, 10)
                : 1;
            /*end:: Setup params */
            return this.router.navigate([this.path], { queryParams: params });
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }

}
