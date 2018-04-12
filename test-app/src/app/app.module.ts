import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        ProductListComponent
    ],
    providers: [
    ],
    exports: [
    ],
    bootstrap: [ProductListComponent]
})
export class AppModule { }