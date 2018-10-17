import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommonService } from './common.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { ConsumerNavbarComponent } from './consumer-navbar/consumer-navbar.component';
import { ConsumerPageComponent } from './consumer-page/consumer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    SearchComponent,
    MapComponent,
    ConsumerNavbarComponent,
    ConsumerPageComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
