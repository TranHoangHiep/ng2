import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

//DI
@Injectable()
export class ProductService {

    private _productURL = 'api/products/products.json'
    public _productDetailURL = 'api/products/p%id%.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productURL)
            //ES6
            //convert Collection[e1] -> Collection[e2]
            //reactive programming
            //callback
            //.map(function(response){
            //    return <IProduct[]> response.json();
            //})  
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}