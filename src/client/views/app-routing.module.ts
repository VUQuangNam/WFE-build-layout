
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

/** ngx boostrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxCurrencyModule } from 'ngx-currency';
import { CKEditorModule } from 'ng2-ckeditor';

/** component common */
import { AuthGuard } from '../auth/auth.guard';
import { GroupConditionComponent } from './components/filters/condition/condition.component';
import { GroupDateTimeComponent } from './components/filters/date-time/date-time.component';
import { PaginationComponent } from './components/paginations/pagination.component';
import { IconGroupComponent } from './components/icons/icon.component';

/** page component */
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

/** auth component */
import { LoginComponent } from './pages/authorization/login/login.component';
import { ModalComponent } from './components/modal/modal/modal.component';

/** account component */
import { AccountComponent } from './pages/accounts/account.component';
import { DetailAccountComponent } from './pages/accounts/detail/detail.component';
import { ChangePasswordComponent } from './pages/accounts/change-password/change-password.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

/** config currency */
export const currencyConfig = {
    allowNegative: true,
    allowZero: true,
    nullable: true,
    align: 'right',
    thousands: ',',
    decimal: '.',
    precision: 0,
    prefix: '',
    suffix: ''
};

const routes: Routes = [
    { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
    {
        path: '',
        component: DefaultLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'trang-chu', component: DashboardComponent }
        ]
    },
    /** account component */
    {
        path: '',
        component: DefaultLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: AccountComponent,
                children: [
                    { path: 'thong-tin-ca-nhan', component: DetailAccountComponent },
                    { path: 'thay-doi-mat-khau', component: ChangePasswordComponent },
                ]
            }
        ]

    },
    /** default component */
    { path: 'home-page', component: HomePageComponent },
    { path: 'dang-nhap', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    declarations: [
        /** begin:: common component */
        ModalComponent,
        GroupConditionComponent,
        GroupDateTimeComponent,
        PaginationComponent,
        IconGroupComponent,
        /** end:: common component */

        /** dashbroad */
        DashboardComponent,

        /** begin:: account component */
        AccountComponent,
        DetailAccountComponent,
        ChangePasswordComponent,
        /** begin:: account component */

        HomePageComponent,

        /** begin:: auth component */
        LoginComponent,
        /** begin:: auth component */

        NotFoundComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        HttpModule,

        /** begin:: ngx boostrap */
        NgSelectModule,
        CKEditorModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
        BsDatepickerModule.forRoot(),
        NgxCurrencyModule.forRoot(currencyConfig),
        /** end:: ngx boostrap */

        RouterModule.forRoot(routes)
    ],
    entryComponents: [
        /** modal detail component */

    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }
