import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommonService } from './common.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { SearchComponent } from './search/search.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    SearchComponent,
    UserpageComponent,
    UserNavbarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
