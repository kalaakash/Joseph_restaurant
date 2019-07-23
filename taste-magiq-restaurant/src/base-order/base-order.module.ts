import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseOrderComponent } from './base-order.component';
import { HeroModule } from '../hero/hero.module';

@NgModule({
  declarations: [BaseOrderComponent],
  imports: [
    CommonModule,
    HeroModule
  ],
  exports: [BaseOrderComponent]
})
export class BaseOrderModule { }
