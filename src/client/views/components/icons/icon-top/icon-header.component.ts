import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'sss-icon-header-group',
    templateUrl: './icon-header.component.html',
    encapsulation: ViewEncapsulation.None
})

export class IconHeaderComponent implements OnInit {
    /** variable */
    @Input() name: string;
    @Input() width: string;
    @Input() height: string;

    constructor() { }

    ngOnInit() { }
}
