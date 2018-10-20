import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsumerModule } from './consumer/consumer.module';

import { CommonService } from './consumer/common.service';

import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommonService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
