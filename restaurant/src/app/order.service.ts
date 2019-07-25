import { Injectable } from '@angular/core';
import { Order } from './Order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Menu_item } from './Menu_item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private ordersUrl = 'api/orders';
  private menuItemsUrl = 'api/menuItems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.ordersUrl)
      .pipe(
        catchError(this.handleError<Order[]>('getOrders', []))
      );
  }

  getMenuItems(): Observable<Menu_item[]>{
    return this.http.get<Menu_item[]>(this.menuItemsUrl)
      .pipe(
        catchError(this.handleError<Menu_item[]>('getMenuItems', []))
      );
  }
/*
  deleteOrder(order: Order): Observable<Order[]>{
    const url = this.ordersUrl+'/order.id';
    return this.http.delete<Order>(url, this.httpOptions).pipe(
      catchError(this.handleError<Order>('deleteHero'))
    );
  }
*/
  saveBaseOrder (order: Order): Observable<any> {
    return this.http.put(this.ordersUrl, order, this.httpOptions).pipe(
      catchError(this.handleError<any>('saveBaseOrder'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}