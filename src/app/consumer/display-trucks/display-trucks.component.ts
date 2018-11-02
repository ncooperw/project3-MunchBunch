import { Component, OnInit } from '@angular/core';
// import { CommonService } from 'src/app/services/common.service';
import {CommonService} from '../../services/common.service';


@Component({
  selector: 'app-display-trucks',
  templateUrl: './display-trucks.component.html',
  styleUrls: ['./display-trucks.component.css']
})
export class DisplayTrucksComponent implements OnInit {
trucks = []
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    
    this._commonService.getTrucks()
    
    .subscribe(
      res => this.trucks  = res,
      err => console.log("truck err" + err)
      
    )
  }

}
