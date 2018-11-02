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
  [x: string]: Object;

  trucks: Truck[];
  selectedTruck: Truck;

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  // this.getTrucks();
  this.commonService
  .getTrucks()
  }

}
