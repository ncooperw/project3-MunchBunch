import { Injectable } from '@angular/core';
import { Cuisine } from './cuisine';
import { CUISINES } from './mock-cuisines';
import { Observable, of} from 'rxjs';

const Truck = "";

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  getCuisines(): Observable<Cuisine[]> {
    return of (CUISINES);
  }
  getCuisine(id: number):
  Observable<Cuisine> {
    return of (CUISINES.find(cuisine => cuisine.id === id));
  }

  // getTruck(id: number): Observable<truck>{
  //   return of (TRUCKS.find(truck => truck.id === id));
  // }

  constructor() { }
}