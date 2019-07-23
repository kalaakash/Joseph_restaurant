import { Component, OnInit } from '@angular/core';
import { Order } from '../app/Order';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  order: Order;

  constructor() { 
    this.order = {
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
  }

  ngOnInit() {
  }

}
