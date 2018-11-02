import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {CommonService} from 
'../../services/common.service';
@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  updateLocationForm= new FormGroup({
    truckName: new FormControl('', Validators.required),

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
    console.log(this.updateLocationForm.value);
    this._commonService.changeLocation(this.updateLocationForm.value)
    .subscribe(
      response => console.log ("Location changed!!!", response), 
      error => console.error("Error Here!", error)
    );
  }
  

}
