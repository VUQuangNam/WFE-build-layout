import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'sss-icon-group',
    templateUrl: './icon.component.html',
    encapsulation: ViewEncapsulation.None
})

export class IconGroupComponent implements OnInit {
    /** variable */
    @Input() name: string;
    @Input() width: string;
    @Input() height: string;

    constructor() { }

    ngOnInit() { }
}
