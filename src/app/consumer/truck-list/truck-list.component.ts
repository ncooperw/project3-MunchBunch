import { Component, OnInit } from '@angular/core';
import { Truck } from 'src/app/trucks/truck';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/trucks/truckSearch.service';
//import { SearchService } from 'src/app/truckSearch.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit {

  trucks: Truck[];
  getTrucks(): void {
    // this.searchService.getTrucks().subscribe(trucks => this.trucks = trucks);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {
  this.getTrucks();

  }

}
