import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';


import { CommonService } from './consumer/common.service';

import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages/messages.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CallbackComponent,
    MessagesComponent,
   // HttpClientModule,
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCX37S57WrEFKAJO02W493eHYHBQD_uTMQ'
    }),
    ReactiveFormsModule
  ],
  providers: [CommonService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
