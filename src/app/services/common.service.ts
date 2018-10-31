import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _url = 'http://localhost:8080/account'
  
  constructor(private http: HttpClient) { }

    getTrucks(){
      return this.http.get('api/trucks');
    }

   
    registerTruck(truckData){
return this.http.post<any>(this._url, truckData);
    }
}
