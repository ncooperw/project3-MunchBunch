import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/truckSearch.service';
import { Subscription } from 'rxjs';
import { TRUCKS } from '../../mock-trucks';
import { Truck } from 'src/app/truck';

//Gives info for one truck on click from search

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {
private subscription: Subscription;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    // this.truck = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.searchService.getTruck(params.get('id'))));
  }


}
