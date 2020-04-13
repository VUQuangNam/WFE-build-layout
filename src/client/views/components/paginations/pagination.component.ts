import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
declare let swal: any;

@Component({
    selector: 'sss-page-group',
    templateUrl: './pagination.component.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PaginationComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    /** variable */
    @Input() path: string;
    limit: number;
    page: number;
    params: any = {};
    keypress: any;
    next = 1; prev = 1;

    ngOnInit() {
        this.route.queryParamMap.subscribe(async (queryParams: Params) => {
            const parmas = queryParams.params;
            this.limit = !parmas.limit ? 20 : parseInt(parmas.limit, 10);
            this.page = !parmas.page ? 1 : parseInt(parmas.page, 10);
            this.next = this.page + 1;
            this.prev = this.page - 1;
            return this.params = queryParams.params;
        });
    }

    onChangePage(page: number) {
        try {
            clearTimeout(this.keypress);
            this.keypress = setTimeout(() => {
                if (!page || page === this.page) return;
                /*begin:: Setup params */
                const params = { page: page };
                Object.keys(this.params).map(param => {
                    if (param !== 'page') params[param] = this.params[param];
                });
                /*end:: Setup params */
                return this.router.navigate([this.path], { queryParams: params });
            }, 400);
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }

    onChangeLimit(limit) {
        try {
            if (limit === this.page) return;
            /*begin:: Setup params */
            const params = { limit: limit };
            Object.keys(this.params).map(param => {
                if (param !== 'limit') params[param] = this.params[param];
            });

            /*end:: Setup params */
            return this.router.navigate([this.path], { queryParams: params });
        } catch (ex) {
            /*begin:: write log ex here: break*/
            throw new Error(ex);
        }
    }
}
