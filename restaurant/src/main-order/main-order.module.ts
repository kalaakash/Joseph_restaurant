import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MainOrderComponent } from './main-order.component';

@NgModule({
  declarations: [ MainOrderComponent] ,
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports:[ MainOrderComponent ]
})
export class MainOrderModule { }
