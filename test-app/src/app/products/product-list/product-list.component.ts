import { Component, OnInit } from '@angular/core';

// import { products } from '../../assets/db';
import { IProduct } from '../../../common/IProduct';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    // data: any =  {
    //     "products" : [

    //     ]
    // };
    // Exercise
    // 1. Toggle button text between "Show image" and "Hide image" depending on state
    // 2. Create a Product interface that defines structure for  object with
    // a. imageUrl
    // b. name
    // c. code
    // d. description
    // e. price
    // f. starRating
    // Note: You have to change data variable wihin db.ts to have ONLY products array now.
    products: IProduct[] = [];
    filteredProducts: IProduct[] = []; 
    imageWidth: number = 50;
    imageBorder: string = '1px solid lightgray';
    imagePadding: number = 5;
    isImageShown = true;
    filterKey: string = '';

    constructor( private _productsService: ProductsService ) {
        console.log( this._productsService );
    }

    ngOnInit() {
        /* next function */ /* executed when a new event ocurs in the Observable */
        /* error function */ /* executed when error occurs in the Observable stream */
        /* complete function */ /* executed when Observable stream of events ends */
        this._productsService.getProducts().subscribe(
            ( response ) => {
                this.products = response;
                this.filteredProducts = this.products;
            },
            ( err ) => console.log( err ), 
            () => console.log( 'completed' )
        );
    }

    toggleImageDisplay() {
        this.isImageShown = !this.isImageShown;
    }

    // Exercise:
    // 1. Make this case-insenstive
    // 2. Take into account product description too when filtering
    filterProducts() {
        this.filteredProducts = this.products.filter(( product ) => {
            return product.name.toLowerCase().indexOf( this.filterKey.toLowerCase() ) !== -1;
        });
    }

    // this is how we use event object
    logEventObject( ev ) {
        // console.log( ev.target );
    }

    logProduct( product, index ) {
        // console.log( product.name );
        // console.log( index );
    }

    updateProductRating( $event, product ) {
        product.starRating = $event;
    }
}