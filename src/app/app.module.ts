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
import { AuthComponent } from './auth/auth.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    SearchComponent,
    UserpageComponent,
    UserNavbarComponent,
    MapComponent,
    AuthComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
  ],
  providers: [CommonService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
