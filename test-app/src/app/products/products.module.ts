import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProductsService } from './products.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { 
            path: 'products/:id', component: ProductDetailComponent,
            children: [
                { path: '', component: ProductReviewsComponent },
                { path: 'add', component: ProductReviewFormComponent }
            ]
        }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductReviewFormComponent,
    ProductReviewsComponent
  ],
  providers: [
      ProductsService
  ]
})
export class ProductsModule { }
