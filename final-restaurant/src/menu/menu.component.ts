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

  constructor() { 
    this.categories = [
      "Softy Cones",
      "Softy Cups",
      "Ice Cream Scoops",
      "Sundaes",
      "Falooda",
      "Fruit Salad",
      "Milk Shakes",
      "Thick Shakes",
      "Smoothies",
      "Fruit Juices",
      "Beverages"    
    ];
    this.categories2 = [
      "Softy & Ice-Creams",
      "Waffles",
      "Popcorn",
      "Pizza Veg",
      "Pizza Non-Veg",
      "Calzone",
      "Toppings",
      "Bread",
      "Burgers",
      "Sides"
    ]
  }

  ngOnInit() {
  }

}
