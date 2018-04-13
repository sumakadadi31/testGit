import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HttpModule,
        ProductsModule,
        RouterModule.forRoot( routes )
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    providers: [
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }