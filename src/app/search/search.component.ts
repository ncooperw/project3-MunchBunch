import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../cuisine';
import { CUISINES } from '../mock-cuisines';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  cuisines: Cuisine[];

  getCuisines(): void {
    this.searchService.getCuisines().subscribe(cuisines => this.cuisines = cuisines);
  }
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getCuisines();
  }

}
