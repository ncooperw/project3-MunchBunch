import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../cuisine';
import { CUISINES } from '../mock-cuisines';
import { CuisineService } from '../cuisine.service';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  selectedCuisine: Cuisine;

  cuisines: Cuisine[];
  display = true;

  constructor(
    private cuisineService: CuisineService
    ) { }


  getCuisines(): void{
    this.cuisineService.getCuisines().subscribe(cuisines => this.cuisines = cuisines);
  }
  ngOnInit() {
    this.getCuisines();
  }
  OnSelect(cuisines: Cuisine): void{
    this.selectedCuisine = cuisines;
  }
  onToggleDisplay(){
    this.display = !this.display;
  }
}
