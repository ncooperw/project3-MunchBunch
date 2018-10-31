import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

  // auth0 = new auth0.WebAuth({
  //   clientID: 'tWSjBmZ6nuZKqLF34gDMbC0oI02586b1',
  //   domain: 'snowy-violet-0608.auth0.com',
  //   responseType: 'token id_token',
  //   redirectUri: 'https://protected-peak-11353.herokuapp.com/',
  //   scope: 'openid'
  // });

  constructor(
    //   private router: Router
    ) {}

  // public login(): void {
  //   this.auth0.authorize();
  // }

}