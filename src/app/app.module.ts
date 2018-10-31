import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages/messages.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map/map.component';


import { LoginComponent } from './login/login.component';
import { ConsumerService } from './consumer/consumer.service';
import { SearchService } from './trucks/truckSearch.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CallbackComponent,
    MessagesComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,  
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCX37S57WrEFKAJO02W493eHYHBQD_uTMQ'
    }),
    ReactiveFormsModule,
  
  ],
  providers: [ConsumerService, AuthService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
