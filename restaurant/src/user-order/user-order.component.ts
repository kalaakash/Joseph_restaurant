import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../app/Order';
import { OrderService } from '../app/order.service';
import { Menu_item } from '../app/Menu_item';
import { Base_Order } from '../app/Base_order';
import { MENUITEMS } from '../app/mock-menu-items';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  baseOrder: Base_Order;
  req_menu_items: Menu_item[];
  person_name: String;
  address: String;
  comment: String;
  date_ordered: Date;

  order: Order;
  menuItems = MENUITEMS;

  constructor(
    private orderService: OrderService,
    ) {}

  ngOnInit() {
    this.order = {
        order_status: 'NOT ORDERED',
        driver_id_assigned: 0,
        driver_assigned: false,
        isVisible: false,
        isActive: false,
        stillEditing: true,
        base_order: {
          person_ordered: '',
          date_ordered: new Date('1st January 1970'),
          address: '',
          menu_items: [
        ],
          comment: ''
        }
    };
  }

  fillMenuItems(): void{
    this.menuItems.forEach(menu_item => {
      if (menu_item.quantity > 0) {
        this.order.base_order.menu_items.push(menu_item);
      }
    });
  }

  submitBaseOrder(): void {
    this.fillMenuItems();
    if (this.order.base_order.menu_items.length > 0) {
      this.order.driver_assigned = false;
      this.order.driver_id_assigned = 0;
      this.order.order_status = 'ORDERED';
      this.order.isVisible = true;
      this.order.isActive = true;
      this.order.stillEditing = false;
      this.order.base_order.person_ordered = this.person_name;
      this.order.base_order.date_ordered = new Date();
      this.order.base_order.address = this.address;
      this.order.base_order.comment = this.comment;
      this.orderService.saveBaseOrder(this.order)
      .subscribe();
    }
  }
}
