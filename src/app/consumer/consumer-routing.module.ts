import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
 import { from } from 'rxjs';
import { TruckSearchComponent } from './truck-search/truck-search.component';

import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consumer' },
  { path: 'reviews', component: ReviewComponent },
  { path: 'truck-search', component: TruckSearchComponent},
  { path: 'account', component: UserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
export const routingComponents = [ReviewComponent, TruckSearchComponent, UserInfoComponent]
