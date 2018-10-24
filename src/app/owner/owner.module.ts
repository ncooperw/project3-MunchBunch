import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerAccountComponent } from './owner-account/owner-account.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerNavbarComponent } from './owner-navbar/owner-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule
  ],
  declarations: [OwnerAccountComponent, OwnerHomeComponent, OwnerNavbarComponent]
})
export class OwnerModule { }
