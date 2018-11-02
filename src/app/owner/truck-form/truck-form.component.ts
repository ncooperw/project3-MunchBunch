import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-truck-form',
  templateUrl: './truck-form.component.html',
  styleUrls: ['./truck-form.component.css']

})


export class TruckFormComponent implements OnInit {

  truckForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imgLink: new FormControl(''),
    cuisine: new FormControl('', Validators.required),
    description: new FormControl(''),
    menuLink: new FormControl(''),
    price: new FormControl('', Validators.required),

    location: new FormGroup({
      latitude: new FormControl(''),
      longitude: new FormControl('')
    })

  });

  constructor(private _commonService: CommonService ) { }
  
  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.truckForm.value);
    this._commonService.registerTruck(this.truckForm.value)
    .subscribe(
      response => console.log ("Success!!!", response), 
      error => console.error("Error Here!", error)
    );
  }
}
