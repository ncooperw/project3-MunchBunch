import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
// import { Cuisine } from '../../cuisine';
// import { CUISINES } from '../../mock-cuisines';
import { SearchService } from '../../truckSearch.service';
import { Trucks } from 'src/app/truck';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-truck-search',
  templateUrl: './truck-search.component.html',
  styleUrls: ['./truck-search.component.css']
})


export class TruckSearchComponent implements OnInit {

  selectedTruck: Trucks;

  trucks: Trucks[];

constructor(
  private searchService: SearchService,
  public client: HttpClient 
  ) { }

   getTrucks() {
    return this.searchService.getTrucks()
    //.subscribe(trucks => this.trucks = trucks);
   }
  
   
  // cuisines: Cuisine[];

  // getCuisines(): void {
  //  this.searchService.getCuisines().subscribe(cuisines => this.cuisines = cuisines);
  // }

  ngOnInit() {
    //this.getCuisines();
    this.getTrucks();
  }
  onSelect(trucks: Trucks): void{
    this.selectedTruck = trucks;
  }
}
