import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
    selector: 'body',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private config: NgSelectConfig
    ) {
        this.config.notFoundText = `Không tim thấy dữ liệu tìm kiếm.!`;
    }

    ngOnInit() { }
}
