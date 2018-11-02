import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { Truck } from '../trucks/truck';
import { of, Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _url = 'http://localhost:5000/api/trucks'

  
  constructor(private http: HttpClient) { }

//   getTrucks(){
//   return this.http.get('api/trucks');
// }

 // get("/api/truck")
//  gettruck(): Promise<void | Truck[]> {
//   return this.http.get(this.trucksUrl)
//              .toPromise()
//              .then(response => httpOptions)
//              .catch(this.handleError);
// }

// // post("/api/truck")
// createTruck(newTruck: Truck): Promise<void | Truck> {
//   return this.http.post(this.trucksUrl, newTruck)
//              .toPromise()
//              .then(response => httpOptions)
//              .catch(this.handleError);
// }

// // get("/api/truck/:id") endpoint not used by Angular app


    getTrucks(){
      return this.http.get<any>(this._url);
    }


// // put("/api/truck/:id")
// updateTruck(putTruck: Truck): Promise<void | Truck> {
//   var putUrl = this.trucksUrl + '/' + putTruck._id;
//   return this.http.put(putUrl, putTruck)
//              .toPromise()
//              .then(response => response.json() as Truck)
//              .catch(this.handleError);
// }

// private handleError (error: any) {
//   let errMsg = (error.message) ? error.message :
//   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//   console.error(errMsg); // log to console instead
// }
   

    registerTruck(truckData){
return this.http.post<any>(this._url, truckData);
    }

    changeLocation(newLocation){
      return this.http.post<any>(this._url, newLocation);
    }
}

