import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/truckSearch.service';

@Component({
  selector: 'app-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.css']
})
export class TruckDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SearchService
  ) { }

  ngOnInit() {
    // this.truck$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getTruck(params.get('id'))));
  }


}
