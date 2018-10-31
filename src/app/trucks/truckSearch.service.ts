import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


import { MessageService } from '../message.service';

import { Truck } from './truck';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private trucksUrl = '/api/trucks';
  
  constructor(
    private http: Http,
    private messageService: MessageService
    ) { };

// get("/api/Truckss")
getTrucks(): Promise<void | Truck[]> {
  return this.http.get(this.trucksUrl)
             .toPromise()
             .then(response => response.json() as Truck[])
             .catch(this.handleError);
}

// post("/api/Trucks")
createTruck(newTruck: Truck): Promise<void | Truck> {
  return this.http.post(this.trucksUrl, newTruck)
             .toPromise()
             .then(response => response.json() as Truck)
             .catch(this.handleError);
}


// delete("/api/Trucks/:id")
deleteTruck(delTruckId: String): Promise<void | String> {
  return this.http.delete(this.trucksUrl + '/' + delTruckId)
             .toPromise()
             .then(response => response.json() as String)
             .catch(this.handleError);
}

// put("/api/Trucks/:id")
updateTruck(putTruck: Truck): Promise<void | Truck> {
  var putUrl = this.trucksUrl + '/' + putTruck._id;
  return this.http.put(putUrl, putTruck)
             .toPromise()
             .then(response => response.json() as Truck)
             .catch(this.handleError);
}

private handleError (error: any) {
  let errMsg = (error.message) ? error.message :
  error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
}
}


// getCuisines(): Observable<Cuisine[]> {
//   return of (CUISINES);
// }
// getCuisine(id: number):
// Observable<Cuisine> {
//   return of (CUISINES.find(cuisine => cuisine.id === id));
// }



  /** GET trucks from the server */
  // getTrucks (): Observable<Truck[]> {
  //   return this.http.get<Truck[]>(this.trucksUrl)
  //     .pipe(
  //       tap(trucks => this.log('fetched trucks')),
  //       catchError(this.handleError('gettrucks', []))
  //     );
  // }
 
  /** GET Truck by id. Return `undefined` when id not found */
  // getTruckNo404<Data>(id: number): Observable<Truck> {
  //   const url = `${this.trucksUrl}/?id=${id}`;
  //   return this.http.get<Truck[]>(url)
  //     .pipe(
  //       map(trucks => trucks[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} Truck id=${id}`);
  //       }),
  //       catchError(this.handleError<Truck>(`getTruck id=${id}`))
  //     );
  // }
 
  // /** GET Truck by id. Will 404 if id not found */
  // getTruck(id: number): Observable<Truck> {
  //   const url = `${this.trucksUrl}/${id}`;
  //   return this.http.get<Truck>(url).pipe(
  //     tap(_ => this.log(`fetched Truck id=${id}`)),
  //     catchError(this.handleError<Truck>(`getTruck id=${id}`))
  //   );
  // }
 
  // /* GET trucks whose name contains search term */
  // searchtrucks(term: string): Observable<Truck[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty Truck array.
  //     return of([]);
  //   }
  //   return this.http.get<Truck[]>(`${this.trucksUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found trucks matching "${term}"`)),
  //     catchError(this.handleError<Truck[]>('searchtrucks', []))
  //   );
  // }
 
  // //////// Save methods //////////
 
  // /** POST: add a new Truck to the server */
  // addTruck (Truck: Truck): Observable<Truck> {
  //   return this.http.post<Truck>(this.trucksUrl, Truck, httpOptions).pipe(
  //     tap((Truck: Truck) => this.log(`added Truck w/ id=${Truck.id}`)),
  //     catchError(this.handleError<Truck>('addTruck'))
  //   );
  // }
 
  // /** DELETE: delete the Truck from the server */
  // deleteTruck (Truck: Truck | number): Observable<Truck> {
  //   const id = typeof Truck === 'number' ? Truck : Truck.id;
  //   const url = `${this.trucksUrl}/${id}`;
 
  //   return this.http.delete<Truck>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted Truck id=${id}`)),
  //     catchError(this.handleError<Truck>('deleteTruck'))
  //   );
  // }
 
  // /** PUT: update the Truck on the server */
  // updateTruck (Truck: Truck): Observable<any> {
  //   return this.http.put(this.trucksUrl, Truck, httpOptions).pipe(
  //     tap(_ => this.log(`updated Truck id=${Truck.id}`)),
  //     catchError(this.handleError<any>('updateTruck'))
  //   );
  // }
 
  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
 
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
 
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
 
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
 
  // /** Log a TruckService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`TruckService: ${message}`);
  // }

 
  // getTrucks(): Observable<Truck[]> {
  //   return this.http.get<Truck[]>(
  //     this.trucksUrl, { observe: 'response'}
  //   );

  //   return of (TRUCKS);
  // }
  // getTruck(id: number): Observable<Truck>{
  //   return of (TRUCKS.find(truck => truck.id === id));
  // }

  
//}
