import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient) { }

    getTrucks(){
      return this.http.get('api/trucks');
    }
}
