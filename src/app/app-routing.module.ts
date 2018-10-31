import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [

  { 
    path: 'consumer', loadChildren: './consumer/consumer.module#ConsumerModule',
    //canActivate:[AuthGuard], 
  },
  { path: 'owner', loadChildren: './owner/owner.module#OwnerModule' },

  { path: '', component: LoginComponent, pathMatch: 'full' }


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes, {enableTracing: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
