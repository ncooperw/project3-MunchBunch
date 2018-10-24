import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CommonService } from './consumer/common.service';

//declare variable for map
//declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private newService: CommonService) {}
  Repdata;
  valbutton = "Save";
}

