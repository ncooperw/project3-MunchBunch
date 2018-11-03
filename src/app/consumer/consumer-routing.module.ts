import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
 //import { from } from 'rxjs';
import { TruckSearchComponent } from './truck-search/truck-search.component';

import { UserInfoComponent } from './user-info/user-info.component';
import { ConsumerPageComponent } from './consumer-page/consumer-page.component';
import { AccountComponent } from './account/account.component';
import { WhatsHotComponent } from './whats-hot/whats-hot.component';



const consumerRoutes: Routes = [
  { path: '', pathMatch: 'full',
  component: ConsumerPageComponent },
  { path: 'reviews', component: ReviewComponent },
  { path: 'search', component: TruckSearchComponent},
  { path: 'account', component: AccountComponent },
  { path: 'whatsHot', component: WhatsHotComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(consumerRoutes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }

