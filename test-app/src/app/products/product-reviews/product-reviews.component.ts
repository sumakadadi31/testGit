import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  private productId: number;
  private reviews: any[];
  
  constructor( private _activatedRoute: ActivatedRoute, private _productsService: ProductsService ) {
      this._activatedRoute.parent.paramMap.subscribe(
          params => {
              this.productId = +params.get( 'id' );
              this._productsService.getReviews( this.productId ).subscribe(
                response => this.reviews = response,
                err => console.log( err )
              )
          }
      )
  }

  ngOnInit() {
  }
}
