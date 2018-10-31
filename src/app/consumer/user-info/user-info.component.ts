import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private newService: ConsumerService){ }
  Repdata;
  valbutton = "Save";

  ngOnInit() {
  //   this.newService.getConsumer().subscribe(data => this.Repdata = data)
  // }
  // onSave = function(consumer, isValid: boolean) {
  //   consumer.mode = this.valbutton;
  //   this.newService.saveConsumer(consumer).subscribe(data => { alert(data.data);
  //   this.ngOnInit();
  //   },
  //   error => this.errorMessage = error)
  // }
  // edit = function (kk) {
  //   this.id = kk._id;
  //   this.name = kk.name;
  //   this.address = kk.address;
  //   this.valbutton = "Update";
  // }
  // delete = function(id) {
  //   this.newService.deleteConsumer(id).subscribe(data => { alert(data.data); this.ngOnInit();}, error => this.errorMessage = error)
  }
}
