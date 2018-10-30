import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Observable, of } from 'rxjs';
import { Cuisine } from './cuisine';
import { CUISINES } from './mock-cuisines';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  
  constructor(
    private messageService: MessageService
    ) { }

    getCuisines(): Observable<Cuisine[]> {
      return of (CUISINES);
    };
    
    getCuisine(id: number):
    Observable<Cuisine> {
      return of (CUISINES.find(cuisine => cuisine.id === id));
    }
}


