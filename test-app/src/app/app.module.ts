import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HttpModule,
        ProductsModule,
        RouterModule.forRoot([
            {
                /* no leading slash - use 'about' and NOT '/about' */
                path: 'about', component: AboutComponent
            },
            {
                path: 'feedback', component: FeedbackFormComponent
            },
            {
                path: '', redirectTo: '/about', pathMatch: "full"
            },
            {
                path: '**', component: PageNotFoundComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        FeedbackFormComponent,
        PageNotFoundComponent
    ],
    providers: [
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }