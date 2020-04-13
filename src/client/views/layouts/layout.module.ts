import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderTopComponent } from '../components/headers/header-top/header-top.component';
import { HeaderBottomComponent } from '../components/headers/header-bottom/header-bottom.component';
import { HeaderMobileComponent } from '../components/headers/header-mobile/header-mobile.component';
import { FooterComponent } from '../components/footers/footer.component';
import { IconHeaderComponent } from '../components/icons/icon-top/icon-header.component';

@NgModule({
    declarations: [
        HeaderTopComponent,
        HeaderBottomComponent,
        HeaderMobileComponent,
        FooterComponent,
        IconHeaderComponent
    ],
    exports: [
        HeaderTopComponent,
        HeaderBottomComponent,
        HeaderMobileComponent,
        FooterComponent,
        IconHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})

export class LayoutModule {
}
