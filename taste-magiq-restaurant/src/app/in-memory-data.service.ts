import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food_item } from './Food_item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const listOfFoodItems = [
      { id: 11, itemName: 'Chicken Pizza', category: 'Pizza and Pasta' },
      { id: 12, itemName: 'Vegetarian Pizza', category: 'Pizza and Pasta' },
      { id: 13, itemName: 'Spicy Chicken Pizza', category: 'Pizza and Pasta' },
      { id: 14, itemName: 'Pepporoni Pizza', category: 'Pizza and Pasta' },
      { id: 15, itemName: 'Pineapple Pizza', category: 'Pizza and Pasta' },
      { id: 16, itemName: 'Chicken Pasta', category: 'Pizza and Pasta' },
      { id: 17, itemName: 'Vegetarian Pasta', category: 'Pizza and Pasta' },
      { id: 18, itemName: 'Pesto Pasta', category: 'Pizza and Pasta' },
      { id: 19, itemName: 'Chicken Burger', category: 'Burger and Sandwich' },
      { id: 20, itemName: 'Vegetarian Burger', category: 'Burger and Sandwich' },
      { id: 21, itemName: 'CheeseBurger', category: 'Burger and Sandwich' },
      { id: 22, itemName: 'Chicken Sandwich', category: 'Burger and Sandwich' },
      { id: 23, itemName: 'Vegetarian Sandwich', category: 'Burger and Sandwich' },
      { id: 24, itemName: 'Cheese Sandwich', category: 'Burger and Sandwich' }
    ];
    return {listOfFoodItems};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(listOfFoodItems: Food_item[]): number {
    return listOfFoodItems.length > 0 ? Math.max(...listOfFoodItems.map(Food_item => Food_item.id)) + 1 : 101;
  }
}