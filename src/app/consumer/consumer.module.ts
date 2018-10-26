import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';

import { ConsumerPageComponent } from './consumer-page/consumer-page.component';
import { ReviewComponent } from './review/review.component';
import { ConsumerNavbarComponent } from './consumer-navbar/consumer-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MapComponent } from './map/map.component';
import { TruckSearchComponent } from './truck-search/truck-search.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { AccountComponent } from './account/account.component';
//import { AppComponent } from '../app.component';
import { CommonService } from './common.service';


@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    ConsumerRoutingModule
  ],
  declarations: [ConsumerPageComponent, ReviewComponent, ConsumerNavbarComponent, UserInfoComponent, MapComponent, TruckSearchComponent, TruckDetailComponent,  TruckListComponent, AccountComponent],
  providers: [CommonService]
})
export class ConsumerModule { }
