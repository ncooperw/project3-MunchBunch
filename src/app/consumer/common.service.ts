import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Consumer } from './consumer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'

})
// CRUD for consumer accounts

export class CommonService {
  private consumerUrl = 'api/account/consumer';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    /** GET consumer from the server */
  getconsumer (): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(this.consumerUrl)
      .pipe(
        tap(consumer => this.log('fetched consumer')),
        catchError(this.handleError('getconsumer', []))
      );
  }
 
  /** GET consumer by id. Return `undefined` when id not found */
  getconsumerNo404<Data>(id: number): Observable<Consumer> {
    const url = `${this.consumerUrl}/?id=${id}`;
    return this.http.get<Consumer[]>(url)
      .pipe(
        map(consumer => consumer[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} consumer id=${id}`);
        }),
        catchError(this.handleError<Consumer>(`getconsumer id=${id}`))
      );
  }
 
  /** GET consumer by id. Will 404 if id not found */
  getConsumer(id: number): Observable<Consumer> {
    const url = `${this.consumerUrl}/${id}`;
    return this.http.get<Consumer>(url).pipe(
      tap(_ => this.log(`fetched consumer id=${id}`)),
      catchError(this.handleError<Consumer>(`getconsumer id=${id}`))
    );
  }
 
  /* GET consumer whose name contains search term */
  searchConsumer(term: string): Observable<Consumer[]> {
    if (!term.trim()) {
      // if not search term, return empty consumer array.
      return of([]);
    }
    return this.http.get<Consumer[]>(`${this.consumerUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found consumer matching "${term}"`)),
      catchError(this.handleError<Consumer[]>('searchconsumer', []))
    );
  }
 
  //////// Save methods //////////
 
  /** POST: add a new consumer to the server */
  addconsumer (consumer: Consumer): Observable<Consumer> {
    return this.http.post<Consumer>(this.consumerUrl, consumer, httpOptions).pipe(
      tap((consumer: Consumer) => this.log(`added consumer w/ id=${consumer.id}`)),
      catchError(this.handleError<Consumer>('addconsumer'))
    );
  }
 
  /** DELETE: delete the consumer from the server */
  deleteconsumer (consumer: Consumer | number): Observable<Consumer> {
    const id = typeof consumer === 'number' ? consumer : consumer.id;
    const url = `${this.consumerUrl}/${id}`;
 
    return this.http.delete<Consumer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted consumer id=${id}`)),
      catchError(this.handleError<Consumer>('deleteconsumer'))
    );
  }
 
  /** PUT: update the consumer on the server */
  updateconsumer (consumer: Consumer): Observable<any> {
    return this.http.put(this.consumerUrl, consumer, httpOptions).pipe(
      tap(_ => this.log(`updated consumer id=${consumer.id}`)),
      catchError(this.handleError<any>('updateconsumer'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a consumerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`consumerService: ${message}`);
  }

  // saveConsumer(consumer){
  //   return this.http.post('/api/SaveConsumer/', consumer).map((response: Response) => response.json());
  // }

  // getConsumer(){
  //   return this.http.get('/api/getConsumer/').map((response: Response) => response.json());
  // }
  
  // deleteConsumer(id){
  //   return this.http.get('/api/deleteConsumer/', id).map((response: Response) => response.json());
  // }
}
