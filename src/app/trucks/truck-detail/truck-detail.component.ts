import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Truck } from '../truck';
import { SearchService } from 'src/app/trucks/truckSearch.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {
  @Input()
  truck: Truck;
  
  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  createTruck(truck: Truck) {
    this.searchService.createTruck(truck).then((newTruck: Truck) => {
      this.createHandler(newTruck);
    });
  }

  updateTruck(truck: Truck): void {
    this.searchService.updateTruck(truck).then((updatedTruck: Truck) => {
      this.updateHandler(updatedTruck);
    });
  }

  deleteTruck(TruckId: String): void {
    this.searchService.deleteTruck(TruckId).then((deletedTruckId: String) => {
      this.deleteHandler(deletedTruckId);
    });
  }

  ngOnInit() {
    
  }


}
