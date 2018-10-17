import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'c1jDrqCqe3zQjDICR41dbGZToW3GjcUl',
    domain: 'munchbunch3.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(
    //   private router: Router
    ) {}

  public login(): void {
    this.auth0.authorize();
  }

}