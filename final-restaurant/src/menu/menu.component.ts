import { Component, OnInit } from '@angular/core';
import { FOODITEMS } from './Food_items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  FoodItems = FOODITEMS;
  categories:String[];
  categories2: string[];
  categories3: string[];
  categories4: string[];

  constructor() { 
    this.categories = [
      "Softy Cones",
      "Softy Cups",
      "Ice Cream Scoops",
      "Sundaes",
      "Falooda",
      "Fruit Salad",
    ];
    this.categories2 = [
      "Milk Shakes",
      "Thick Shakes",
      "Smoothies",
      "Fruit Juices",
      "Beverages"    
    ];
    this.categories3 = [
      "Waffles ",
      "Popcorn ",
      "Pizza Veg ",
      "Pizza Non-Veg ",
    ];
    this.categories4 = [
      "Calzone ",
      "Toppings",
      "Bread",
      "Burger",
      "Sides"
    ];
  }

  ngOnInit() {
  }

}
