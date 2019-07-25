import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../app/Order';
import { OrderService } from '../app/order.service';

@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.css']
})
export class MainOrderComponent implements OnInit {
  @Input() order: Order;
  orders: Order[];

  constructor(
    private orderService: OrderService,
    ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void { 
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  saveBaseOrder(order: Order): void{
    if(order.driver_id_assigned!=0 && !isNaN(order.driver_id_assigned)){
        this.orderService.saveBaseOrder(this.order)
      .subscribe();
    }
  }

/*
  deleteOrder(order: Order): void{
    this.orders = this.orders.filter(h => h !== order);
    this.orderService.deleteOrder(order).subscribe();
  }
*/
  showOrders():void{
    console.log(this.orders);
  }
}

/**
 *     this.order = {
      "id": 0,
      "date_ordered": new Date("February 4, 2016 10:13:00"),
      "order_status": "NOT ORDERED",
      "person_ordered": "",
      "driver_id_assigned": 0,
      "base_order": {
        "menu_items":[
          {
            "food_item": {
              "id":0,
              "itemName": "",
              "category": ""
            },
            "quantity": 0,
          }
        ],
        "comment": "",
      }
    } 

 */