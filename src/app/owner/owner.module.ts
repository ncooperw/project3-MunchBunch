import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerAccountComponent } from './owner-account/owner-account.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerNavbarComponent } from './owner-navbar/owner-navbar.component';
import { OwnerCreateAccountComponent } from './owner-create-account/owner-create-account.component';
import { TruckFormComponent } from './truck-form/truck-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateLocationComponent } from './update-location/update-location.component';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [OwnerAccountComponent, OwnerHomeComponent, OwnerNavbarComponent, OwnerCreateAccountComponent, TruckFormComponent, UpdateLocationComponent],
  
})
export class OwnerModule { }
