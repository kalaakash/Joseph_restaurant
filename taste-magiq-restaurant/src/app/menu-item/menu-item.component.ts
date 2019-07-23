import { Component, OnInit } from '@angular/core';
import { Food_item } from '../Food_item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  
  food_item: Food_item;
  quantity: number;

  constructor(food_item: Food_item, init_quantity: number) { 
    this.food_item = food_item;  
    this.quantity=init_quantity; 
  }

  ngOnInit() {
  }

}
