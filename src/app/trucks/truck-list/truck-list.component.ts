import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from 'src/app/trucks/truck';
import { SearchService } from 'src/app/trucks/truckSearch.service';
import { Cuisine } from '../../consumer/cusines/cuisine';
import { CommonService } from 'src/app/services/common.service';

//import { TruckDetailComponent } from '../trucks/truck-detail/truck-detail.component';
@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css'],
  providers: [SearchService]
})
export class TruckListComponent implements OnInit {

  //@Input() cuisine: Cuisine;

  trucks: Truck[];
  selectedTruck: Truck;

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) { }

  // getTrucks(): void {
  //   this.searchService.getTrucks().subscribe(trucks => this.trucks = trucks);
  // }
  ngOnInit() {
  // this.getTrucks();
  this.commonService
  .getTrucks()
  .then((trucks: Truck[]) => {
    this.trucks = trucks.map((truck) => {
      if (!truck.location) {
        truck.location = {
          latitude: 39.7392,
          longitude: 104.9903
        }
      }
      return truck;
    });
  });
  }
  private getIndexOfTruck = (truckId: String) => {
    return this.trucks.findIndex((truck) => {
      return truck._id === truckId;
    });
  }

  selectTruck(truck: Truck) {
    this.selectedTruck = truck
  }

  createNewtruck() {
    var truck: Truck = {

      name: '',
      imgLink: '',
      cuisine: '',
      description: '',
      menuLink: '',
      price: '',
      location: {
        latitude: 0,
        longitude: 0
    }
    };

    // By default, a newly-created truck will have the selected state.
    this.selectTruck(truck);
  }

  deletetruck = (truckId: String) => {
    var idx = this.getIndexOfTruck(truckId);
    if (idx !== -1) {
      this.trucks.splice(idx, 1);
      this.selectTruck(null);
    }
    return this.trucks;
  }

  addtruck = (truck: Truck) => {
    this.trucks.push(truck);
    this.selectTruck(truck);
    return this.trucks;
  }

  updatetruck = (truck: Truck) => {
    var idx = this.getIndexOfTruck(truck._id);
    if (idx !== -1) {
      this.trucks[idx] = truck;
      this.selectTruck(truck);
    }
    return this.trucks;
  }

}
