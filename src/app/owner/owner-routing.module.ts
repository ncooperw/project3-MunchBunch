import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerAccountComponent } from './owner-account/owner-account.component';

const routes: Routes = [
  { path: '', 
  component: OwnerHomeComponent },
  { path: 'account', component: OwnerAccountComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
