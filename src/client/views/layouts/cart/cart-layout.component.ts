import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'src/client/services/script-loader.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

declare let KTLayout: any;
declare let KTApp: any;

@Component({
    selector: 'vqn-cart-layout',
    templateUrl: './cart-layout.component.html'
})
export class CartLayoutComponent implements OnInit {
    constructor(
        private scriptService: ScriptLoaderService,
        private router: Router
    ) { }

    ngOnInit() {
        this.scriptService.loadScripts('body', [
            /** begin::Global Theme Bundle(used by all pages) */
            '/assets/vendors/global/vendors.bundle.js',
            '/assets/jquery/bundles/scripts.bundle.js',
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

        this.router.events.subscribe((route) => {
            if (route instanceof NavigationStart) { }
            if (route instanceof NavigationEnd) {
                (KTLayout as any).init();
                (KTApp as any).init();
            }
        });
    }
}
