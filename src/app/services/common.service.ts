import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _url = 'http://localhost:5000/api/trucks'
  
  constructor(private http: HttpClient) { }

    getTrucks(){
      return this.http.get<any>(this._url);
    }

   
    registerTruck(truckData){
return this.http.post<any>(this._url, truckData);
    }

    changeLocation(newLocation){
      return this.http.post<any>(this._url, newLocation);
    }
}
