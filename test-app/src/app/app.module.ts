import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ProductsService } from './products.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        FeedbackFormComponent
    ],
    providers: [
        ProductsService
    ],
    exports: [
    ],
    bootstrap: [ProductListComponent]
})
export class AppModule { }