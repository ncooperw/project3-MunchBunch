import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
// import { Cuisine } from '../../cuisine';
// import { CUISINES } from '../../mock-cuisines';
import { SearchService } from '../../trucks/truckSearch.service';
import { Truck } from 'src/app/trucks/truck';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-truck-search',
  templateUrl: './truck-search.component.html',
  styleUrls: ['./truck-search.component.css']
})


export class TruckSearchComponent implements OnInit {

  selectedTruck: Truck;

  trucks: Truck[];

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
  onSelect(trucks: Truck): void{
    this.selectedTruck = trucks;
  }
}
