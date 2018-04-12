import { Component, OnInit } from '@angular/core';

import { products } from '../../assets/db';
import { IProduct } from '../../common/IProduct';

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
    products: IProduct[] = products;
    filteredProducts: IProduct[] = []; 
    imageWidth: number = 50;
    imageBorder: string = '1px solid lightgray';
    imagePadding: number = 5;
    isImageShown = true;
    filterKey: string = '';

    constructor() {
    }

    ngOnInit() {
        this.filteredProducts = this.products;
    }

    toggleImageDisplay() {
        this.isImageShown = !this.isImageShown;
        this.filterKey = 'sdvsadva';
    }

    // Exercise:
    // 1. Make this case-insenstive
    // 2. Take into account product description too when filtering
    filterProducts() {
        this.filteredProducts = this.products.filter(( product ) => {
            return product.name.indexOf( this.filterKey ) !== -1;
        });
    }
}