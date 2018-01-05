import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Routes, RouterModule } from '@angular/router';
import {HotelComponent} from './hotel/hotel.component';
import { HotelServices } from './hotel/hotelServices';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  {path:'',component: HotelComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HotelServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
