/*

import { Order } from './Order';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { Food_item } from './Food_item';

const FoodItems: Food_item[] = [
    { itemId: 101, itemName: 'Chicken Pizza', category: 'Pizza and Pasta' },
    { itemId: 102, itemName: 'Vegetarian Pizza', category: 'Pizza and Pasta' },
    { itemId: 103, itemName: 'Spicy Chicken Pizza', category: 'Pizza and Pasta' },
    { itemId: 104, itemName: 'Pepporoni Pizza', category: 'Pizza and Pasta' },
    { itemId: 105, itemName: 'Pineapple Pizza', category: 'Pizza and Pasta' },
    { itemId: 106, itemName: 'Chicken Pasta', category: 'Pizza and Pasta' },
    { itemId: 107, itemName: 'Vegetarian Pasta', category: 'Pizza and Pasta' },
    { itemId: 108, itemName: 'Pesto Pasta', category: 'Pizza and Pasta' },
    { itemId: 201, itemName: 'Chicken Burger', category: 'Burger and Sandwich' },
    { itemId: 202, itemName: 'Vegetarian Burger', category: 'Burger and Sandwich' },
    { itemId: 203, itemName: 'CheeseBurger', category: 'Burger and Sandwich' },
    { itemId: 204, itemName: 'Chicken Sandwich', category: 'Burger and Sandwich' },
    { itemId: 204, itemName: 'Vegetarian Sandwich', category: 'Burger and Sandwich' },
    { itemId: 204, itemName: 'Cheese Sandwich', category: 'Burger and Sandwich' }
  ];

  
export const ORDERS: Order[] = [
    { id: 11, person_id_ordered: 11, driver_id_assigned: 11, date_ordered: new Date("February 4, 2016 10:13:00"),  
    order_status: 'NOT ORDERED', 
    base_order: {[FoodItems[0]], comment: 'Hot food please'}

},
    { id: 12,person_id_ordered: 12, driver_id_assigned: 12, date_ordered: new Date("February 4, 2016 10:13:00"),  
    order_status: 'NOT ORDERED', 
    base_order: { [ {  FoodItems[0], quantity: 1}, {  FoodItems[3], quantity: 2} ], comment: 'Not too hot' }
},
    { id: 13, person_id_ordered: 13, driver_id_assigned: 13, date_ordered: new Date("February 4, 2016 10:13:00"),  
    order_status: 'NOT ORDERED', 
    base_order: { [ {  FoodItems[0], quantity: 1}, {  FoodItems[3], quantity: 2} ], comment: 'Not too hot' }
},

    { id: 14, person_id_ordered: 14, driver_id_assigned: 14, date_ordered: new Date("February 4, 2016 10:13:00"),  
    order_status: 'NOT ORDERED', 
    base_order: { [ {  FoodItems[0], quantity: 1}, {  FoodItems[3], quantity: 2} ], comment: 'Not too hot' }
},
    { id: 15, person_id_ordered: 11, driver_id_assigned: 13, date_ordered: new Date("February 4, 2016 10:13:00"),  
    order_status: 'NOT ORDERED', 
    base_order: { [ {  FoodItems[0], quantity: 1}, {  FoodItems[3], quantity: 2} ]; comment: 'Spicy food I want'; }
    }
];

*/