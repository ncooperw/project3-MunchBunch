import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TruckService } from '../../trucks/truckSearch.service';

@Component({
  selector: 'app-truck-form',
  templateUrl: './truck-form.component.html',
  styleUrls: ['./truck-form.component.css']

})
export class TruckFormComponent implements OnInit {

  truckForm = new FormGroup({
    truckName: new FormControl('', Validators.required),
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

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value

    console.warn(this.truckForm.value);

  }
}
