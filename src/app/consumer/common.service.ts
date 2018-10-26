import { Injectable } from '@angular/core';
import{ Http, Response, Headers, RequestOptions } from '@angular/http';

import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'

})

export class CommonService {

  constructor(private http: Http) { }
  saveConsumer(consumer){
    return this.http.post('/api/SaveConsumer/', consumer).map((response: Response) => response.json());
  }

  getConsumer(){
    return this.http.get('/api/getConsumer/').map((response: Response) => response.json());
  }
  
  deleteConsumer(id){
    return this.http.get('/api/deleteConsumer/', id).map((response: Response) => response.json());
  }
}
