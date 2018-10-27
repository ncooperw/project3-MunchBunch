import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConsumerRoutingModule } from './consumer-routing.module';

import { ConsumerPageComponent } from './consumer-page/consumer-page.component';
import { ReviewComponent } from './review/review.component';
import { ConsumerNavbarComponent } from './consumer-navbar/consumer-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { TruckSearchComponent } from './truck-search/truck-search.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { AccountComponent } from './account/account.component';

import { CommonService } from './common.service';
import { MapComponent } from '../map/map.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    HttpClientModule,
    AgmCoreModule
  ],
  declarations: [ConsumerPageComponent, ReviewComponent, ConsumerNavbarComponent, UserInfoComponent, TruckSearchComponent, TruckDetailComponent,  TruckListComponent, AccountComponent, ],
  providers: [CommonService]
})
export class ConsumerModule { }
