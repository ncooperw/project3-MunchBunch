import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private newService: CommonService){ }
  Repdata;
  valbutton = "Save";

  ngOnInit() {
    this.newService.getUser().subscribe(data => this.Repdata = data)
  }
  onSave = function(user, isValid: boolean) {
    user.mode = this.valbutton;
    this.newService.saveUser(user).subscribe(data => { alert(data.data);
    this.ngOnInit();
    },
    error => this.errorMessage = error)
  }
  edit = function (kk) {
    this.id = kk._id;
    this.name = kk.name;
    this.address = kk.address;
    this.valbutton = "Update";
  }
  delete = function(id) {
    this.newService.deleteUser(id).subscribe(data => { alert(data.data); this.ngOnInit();}, error => this.errorMessage = error)
  }
}
