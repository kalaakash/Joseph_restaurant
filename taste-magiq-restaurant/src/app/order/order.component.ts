import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from '../order.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location
  ) { }

  @Input() order: Order;
  ngOnInit(): void {
    this.getOrder();
  }
  
  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
      .subscribe(order => this.order = order);
  }

  goBack(): void {
    this.location.back();
  }
/*
  save(): void {
    this.orderService.updateOrder(this.order)
      .subscribe(() => this.goBack());
  }
*/
}
