import { Http, Headers, Response, Jsonp, RequestOptions, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

///Service class to call REST API
@Injectable()
export class HotelServices {
    constructor(private http:  Http ) {
    }

    getdata() {
        return this.http.get('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel').map(res => res.json());

    }
}