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

  constructor() { 
    this.categories = [
      "Pizza and Pasta",
      "Burger and Sandwich",
      "Softy & Ice-Creams"
    ];
  }

  ngOnInit() {
  }

}
