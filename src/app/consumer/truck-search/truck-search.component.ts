import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../../cuisine';
import { CUISINES } from '../../mock-cuisines';
import { SearchService } from '../../truckSearch.service';

@Component({
  selector: 'app-truck-search',
  templateUrl: './truck-search.component.html',
  styleUrls: ['./truck-search.component.css']
})
export class TruckSearchComponent implements OnInit {

  cuisines: Cuisine[];

  getCuisines(): void {
    this.searchService.getCuisines().subscribe(cuisines => this.cuisines = cuisines);
  }
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getCuisines();
  }

}
