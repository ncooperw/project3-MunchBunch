import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
 //import { from } from 'rxjs';
import { TruckSearchComponent } from './truck-search/truck-search.component';

import { UserInfoComponent } from './user-info/user-info.component';
import { TruckDetailComponent } from './truck-detail/truck-detail.component';
import { ConsumerPageComponent } from './consumer-page/consumer-page.component';

const consumerRoutes: Routes = [
  { path: '', 
  component: ConsumerPageComponent },
  { path: 'reviews', component: ReviewComponent },
  { path: 'truck-search', component: TruckSearchComponent},
  { path: 'account', component: UserInfoComponent },
  { path: 'truck/:id', component: TruckDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(consumerRoutes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }

