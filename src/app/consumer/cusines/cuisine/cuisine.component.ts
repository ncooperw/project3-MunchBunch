import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../cuisine';
import { CuisineService } from '../cuisine.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {
  selectedCuisine: Cuisine;

  cuisines: Cuisine[];

  constructor(
    private cuisineService: CuisineService
    ) { }


  getCuisines(){
    return this.cuisineService.getCuisines();
  }
  ngOnInit() {
  }

}
