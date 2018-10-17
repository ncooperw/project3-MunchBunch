import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  onLogin() {
console.log('clicked')
this.authService.login()
  }

  ngOnInit() {
  }

}
