import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';

import {
    ApiService,
    FooterComponent,
    HeaderComponent,
    JwtService,
    SharedModule,
    TransactionService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [],
    imports: [
        BrowserModule,
        HomeModule,
        rootRouting,
        SharedModule
    ],
    providers: [
        ApiService,
        JwtService,
        TransactionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
