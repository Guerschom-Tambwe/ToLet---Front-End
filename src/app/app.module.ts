﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { MainNavigationComponent } from './shared/main-navigation/main-navigation.component'
;
import { SubMenuComponent } from './shared/sub-menu/sub-menu.component'
;
import { FooterComponent } from './shared/footer/footer.component'
;
import { RegisterComponent } from './register/register.component'
;
import { MyAdvertsComponent } from './my-adverts/my-adverts.component';;
import { AlertComponent } from './shared/alert/alert.component'
;
import { AdvertsEditComponent } from './adverts-edit/adverts-edit.component'
;
import { AdvertDeleteComponent } from './advert-delete/advert-delete.component'
;
import { AdvertHideComponent } from './advert-hide/advert-hide.component'
;
import { HomesForSaleComponent } from './homes-for-sale/homes-for-sale.component'

@NgModule({
    imports: [       
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        MainNavigationComponent,
        SubMenuComponent,
        FooterComponent,
        RegisterComponent,
        MyAdvertsComponent,
        AlertComponent,
        AdvertsEditComponent,
        AdvertDeleteComponent,
        AdvertHideComponent,
        HomesForSaleComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }