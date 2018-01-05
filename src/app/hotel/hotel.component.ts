import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HotelServices } from './hotelServices';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
@Component({
  selector: 'hotel-root',
  templateUrl: './hotel.component.html'
})
export class HotelComponent  implements OnInit {
  dtOptions: DataTables.Settings = {};
  
  hotel=[];
  userinfo=[];
  offerinfo=[];
  data=[];
  keys:String[];
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private router: Router, public http: Http, private _hotelServices: HotelServices) {

  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    // this.getNews();
    // console.log(this.data);
    this.gethotel();
    this.http.get('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel')
    .map(this.extractData)
    .subscribe(hotel => {
      // this.data = hotel.offers.Hotel[0];
      // this.hotel=hotel.offers.Hotel;
      this.keys= Object.keys(this.hotel);
      this.userinfo=hotel.userInfo;
      this.offerinfo=hotel.offerInfo;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });

  }
  
  gethotel() {
    return this._hotelServices.getdata().subscribe((res) => {
       this.data = res.offers.Hotel[0];
       this.hotel=res.offers.Hotel;
       this.keys= Object.keys(this.hotel);
       this.userinfo=res.userInfo;
       this.offerinfo=res.offerInfo;
       console.log(this.data);
       console.log(this.hotel);
       console.log(this.userinfo);
       console.log(this.offerinfo);
       
       
     });
   }



private extractData(res: Response) {
 const body = res.json();
 return body.data || {};
}
  title = 'hotel';
}
