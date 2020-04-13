import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { GlobalErrorHandler } from '../middewares/errors';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScriptLoaderService, AuthGuard } from 'src/client/services/index';

import { Utilities } from '../utils';
import { LayoutModule } from './layouts/layout.module';
import { CartLayoutComponent } from './layouts/cart/cart-layout.component';
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import {
    HeaderConfig,
    DateTimeConfig,
    CurrencyConfig,
    DataTableConfig,
    TailorDesignConfig,
    VariableConfig,
    FilterGroup
} from '../config';

@NgModule({
    declarations: [
        AppComponent,
        DefaultLayoutComponent,
        CartLayoutComponent
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        DatePipe,
        Utilities,
        AuthGuard,
        HeaderConfig,
        DateTimeConfig,
        CurrencyConfig,
        DataTableConfig,
        TailorDesignConfig,
        ScriptLoaderService,
        VariableConfig,
        FilterGroup,
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
