import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Condition } from 'src/client/models';
import { ServiceClient } from 'src/client/services';

declare let swal: any;

@Component({
    selector: 'vqn-search-filter-group',
    templateUrl: './condition.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [
        ServiceClient
    ]
})

export class GroupConditionComponent implements OnInit {
    /*begin:: params for utilities */
    @Input() path: string;
    @Input() component: string;
    @Input() conditions: Condition[];
    /*end:: params for utilities*/

    params: any = {};
    filters: Condition[];
    keypress: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private serviceClient: ServiceClient
    ) { }

    ngOnInit() {
        this.route.queryParamMap.subscribe(async (queryParams: Params) => {
            try {
                const params: any = {};

                /** load param on queryParams */
                Object.keys(queryParams.params).map(
                    key => params[key] = queryParams.params[key]
                );

                this.filters = this.filters
                    ? this.filters
                    : await this.loadFilters();

                /** load filter append to list */
                this.filters.map(filter => {
                    const paramSelected = [];
                    const data = params[filter.group]
                        ? params[filter.group].split(',') as []
                        : [];

                    /** load param from filter values */
                    filter.values.map(group => {
                        /** set value checked follow params */
                        const exist = data.find(x => x === group.value);
                        if (exist) group.checked = true;

                        /** load default checked condition */
                        if (
                            group.checked
                        ) {
                            paramSelected.push(group.value);
                            params[group.name] = paramSelected.join(',');
                        }
                    });
                });

                return this.params = params;
            } catch (ex) {
                /*begin:: write log ex here: break*/
                return console.log(ex),
                    swal.fire('Hệ Thống', 'Có lỗi xảy ra. Xin vui lòng kiểm tra lại kết nối mạng.!', 'warning');
            }
        });
    }

    loadFilters = async () => {
        const filters = [];
        this.conditions.map(async condition => {
            /** load values from service client */
            if (!condition.local) {
                try {
                    const respone = await this.serviceClient.get(condition.service.uri);
                    if (respone.code) return condition.values = [] as any;

                    /** load condition values from respone */
                    const values = respone[condition.service.respone] as any[];
                    values.map(x =>
                        condition.values.push({
                            value: x.id,
                            name: condition.group,
                            text: x.name,
                            checked: false
                        })
                    );
                } catch (ex) {
                    return condition.values = [] as any;
                }
            }

            /** append condition to filters */
            filters.push(condition);
        });

        return filters as Condition[];
    }

    handleChangeFilter(event) {
        try {
            const params = {};
            const name = event.target.name;
            const value = event.target.value;
            const type = event.target.type;

            /** Checking value add to params */
            let data = [];
            const _filters = this.filters.find(x => x.group === name);
            _filters.values.map(param => {
                if (param.checked) data.push(param.value);
            });

            const exists = data.find(x => x === value);
            const indexOf = data.indexOf(exists);

            /** push or delete value in params */
            if (!$(event.target).is(':checked')) {
                data.splice(indexOf, 1);
                _filters.values.map(key => {
                    if (key.value === value) key.checked = false;
                });
            } else {
                type === 'radio' ? data = [value] : data.push(value);
                _filters.values.map(key => {
                    if (key.value !== value) key.checked = false;
                });
            }

            /** Replace param follow data */
            !data.length ? delete params[name] : params[name] = data.join(',');

            /** Push old params to new param */
            Object.keys(this.params).map(param => {
                if (param !== name) params[param] = this.params[param];
            });

            return this.params = params,
                this.navigation(this.params);
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }

    handleChangeKeyword(event) {
        try {
            const params = {};
            const name = event.target.name;
            const value = event.target.value as string;

            /*Step:: Checking param */
            clearTimeout(this.keypress);
            this.keypress = setTimeout(() => {
                if (!value) delete params[name];
                else params[name] = value.trim();
                /** Push old params to new param */
                Object.keys(this.params).map(param => {
                    if (param !== name) params[param] = this.params[param];
                });

                return this.params = params,
                    this.navigation(this.params);
            }, 500);
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
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
