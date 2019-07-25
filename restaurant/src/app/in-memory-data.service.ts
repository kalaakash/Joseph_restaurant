import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Order } from './Order';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      {
        id: 11,
        order_status: 'PREPAING',
        driver_assigned: false,
        driver_id_assigned: 0,
        isVisible: false,
        isActive: true,
        stillEditing: true,
        base_order: {
          person_ordered: 'Anas Ablan',
          date_ordered: new Date('August 4, 2019 10:13:00'),
          address: '310, Building 3, Trams Properties',
          menu_items: [
            {
              food_item: {
                id: 1,
                itemName: 'Chicken Pizza',
                category: 'Pizza and Pasta'
              },
              quantity: 1,
            },
            {
              food_item: {
                id: 7,
                itemName: 'Vegetarian Pasta',
                category: 'Pizza and Pasta'
              },
              quantity: 2,
            },
            {
              food_item: {
                id: 11,
                itemName: 'Chicken Burger',
                category: 'Burger and Sandwich'
              },
              quantity: 3,
            },
          ],
          comment: 'Spicy pasta man',
        }
    },
    {
        id: 12,
        order_status: 'ORDERED',
        driver_id_assigned: 13,
        driver_assigned: true,
        isVisible: true,
        isActive: true,
        stillEditing: false,
        base_order: {
          person_ordered: 'Aakash Kalantre',
          date_ordered: new Date('June 4, 2019 10:13:00'),
          address: '310, Building 3, Trams Properties',
          menu_items: [
          {
            food_item: {
              id: 1,
              itemName: 'Chicken Pizza',
              category: 'Pizza and Pasta'
            },
            quantity: 2,
          },
          {
            food_item: {
              id: 7,
              itemName: 'Vegetarian Pasta',
              category: 'Pizza and Pasta'
            },
            quantity: 1,
          },
          {
            food_item: {
              id: 11,
              itemName: 'Chicken Burger',
              category: 'Burger and Sandwich'
            },
            quantity: 3,
          },
        ],
          comment: 'Spicy pizzas and burgers please'
        }
    }
  ];

    return { orders };
  }

  genId(orders: Order[]): number {
    return orders.length > 0 ? Math.max(...orders.map(order => order.id)) + 1 : 0;
  }
}
