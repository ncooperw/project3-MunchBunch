import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ConsumerRoutingModule } from './consumer-routing.module';

import { ConsumerPageComponent } from './consumer-page/consumer-page.component';
import { ReviewComponent } from './review/review.component';
import { ConsumerNavbarComponent } from './consumer-navbar/consumer-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { TruckSearchComponent } from './truck-search/truck-search.component';


import { AccountComponent } from './account/account.component';

import { ConsumerService } from './consumer.service';
import { MapComponent } from '../map/map.component';
import { AgmCoreModule } from '@agm/core';
import { TruckListComponent } from '../trucks/truck-list/truck-list.component';
import { TruckDetailComponent } from '../trucks/truck-detail/truck-detail.component';
import { CuisineComponent } from './cusines/cuisine/cuisine.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';




@NgModule({
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule,
    FormsModule
  ],
  declarations: [
    ConsumerPageComponent, ReviewComponent, ConsumerNavbarComponent, UserInfoComponent, TruckSearchComponent, TruckDetailComponent,  TruckListComponent, AccountComponent,
  MapComponent,
  CuisineComponent,
  SearchDetailComponent 
],
  providers: [ConsumerService]
})
export class ConsumerModule { }
