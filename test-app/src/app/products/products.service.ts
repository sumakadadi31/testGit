import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; /* adds operator map to the Observable object */

import { IProduct } from '../../common/IProduct';

@Injectable()
export class ProductsService {
    private _productsUrl = environment.apiBaseUrl + '/products';
    constructor( private _http: Http ) {
        /* this._http = _http; */ /* automatically added since we declared access specifier in the argument */
    }
    
    getProducts() : Observable<IProduct[]> {
        return this._http.get( this._productsUrl )
            .map( ( response ) => <IProduct[]>response.json() ); /* explicitly type-cast the response to IProduct array type */
    
    }

    getProduct( id: number ) : Observable<IProduct> {
        return this._http.get( this._productsUrl + '/' + id )
            .map( response => <IProduct>response.json() )
    }

    getReviews( productId: number ) {
        return this._http.get( this._productsUrl + '/' + productId + '/' + 'reviews' )
            .map( ( response ) => response.json() );
    
    }
}
