import { Component, OnInit, Input } from '@angular/core';
//import { Order } from '../Order';
import { OrderService } from '../order.service';
import { Food_item } from '../Food_item';

/*
import { Time } from '@angular/common';
import { OrderStatusType } from '../OrderStatusType';
import { TM_User } from '../TM_User';
import { TM_Driver } from '../TM_Driver';*/
import { BaseOrderComponent } from '../base-order/base-order.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  listOfFoodItems : Food_item[];
  
  id: number;
  date_ordered: Date;
  order_status: String;
  person_id_ordered: number;
  driver_id_assigned: number;
  base_order: BaseOrderComponent;

  constructor(private orderService: OrderService) { }

  //@Input() order: Order;
  ngOnInit(): void {
    this.getFoodItems();
  }
  
  getFoodItems(): void {
    this.orderService.getFoodItems()
      .subscribe(listOfFoodItems => this.listOfFoodItems = listOfFoodItems);
  }

  showId(): void{
    console.log(this.listOfFoodItems);
  }

  /*
  addItemtoMenuList(item_id: number, item_name:String, item_category:String): void{
    console.log("The item Id is " + item_id);
    item_name = item_name.trim();
    if (!item_name) { return; }
    this.orderService.addItemtoMenuList({  } as MenuListComponent)
      .subscribe(hero => {
        this.heroes.push(hero);
    });
  }*/

/*
  save(): void {
    this.orderService.updateOrder(this.order)
      .subscribe(() => this.goBack());
  }
*/
}
