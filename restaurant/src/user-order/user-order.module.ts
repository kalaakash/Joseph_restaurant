import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserOrderComponent } from './user-order.component';

@NgModule({
  declarations: [ UserOrderComponent ] ,
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports:[ UserOrderComponent ]
})
export class UserOrderModule { }
