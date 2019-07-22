import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Order } from './Order';
import { ORDERS } from './mock-orders';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private messageService: MessageService) { }

  getOrders(): Observable<Order[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('OrderService: fetched orders');
    return of(ORDERS);
  }

  getOrder(id: number): Observable<Order> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`OrderService: fetched order id=${id}`);
    return of(ORDERS.find(order => order.id === id));
  }
}