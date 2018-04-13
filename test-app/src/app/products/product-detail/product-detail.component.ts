import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../../common/IProduct';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productId: number;
  private product: IProduct;

  constructor( private _activatedRoute: ActivatedRoute, private _productsService: ProductsService, private _router: Router ) {
      // +this._activatedRoute.snapshot.params.id is same as parseInt( +this._activatedRoute.snapshot.params.id )

      this.productId = +this._activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this._productsService.getProduct( this.productId ).subscribe(
        response => {
            this.product = response,
            console.log( this.product );
        },
        err => console.log( err )
    );
  }

  navigateToProductCatalogView() {
      this._router.navigate( [ '/products' ] );
  }
}
