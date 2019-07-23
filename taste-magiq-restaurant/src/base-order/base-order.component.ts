import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { Food_item } from '../Food_item';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-base-order',
  templateUrl: './base-order.component.html',
  styleUrls: ['./base-order.component.css']
})
export class BaseOrderComponent implements OnInit {

  menu_items: MenuItemComponent[];
  comment: String;
  listOfFoodItems: Food_item[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    //getMenuItems();
    this.comment="";
    this.initializeItems();
    //this.showFIs();
  }

  initializeItems(): void{
    this.orderService.getFoodItems()
      .subscribe(listOfFoodItems => {
         this.listOfFoodItems = listOfFoodItems;
      });
    console.log("Init FI");
  }

  showFIs(): void{
    this.menu_items[0] = { "quantity":2, "foodItem":this.listOfFoodItems[0]};
    console.log("INIT DONE");
  }

  showMIs(): void{
    console.log(this.listOfFoodItems);
    console.log(this.menu_items);
  }

  incrementQuantity(id: number): void{
    //this.menu_items.map(())
  }

}