import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DriverComponent } from '../driver/driver.component';
import { ManagerComponent } from '../manager/manager.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../home/home.module';
import { InfoModule } from '../info/info.module';
import { MainOrderModule } from '../main-order/main-order.module';
import { UserOrderModule } from '../user-order/user-order.module';
import { ContactModule } from 'src/contact/contact.module';
import { MenuModule } from 'src/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    ManagerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    InfoModule,
    ContactModule,
    HomeModule,
    HttpClientModule,
    MainOrderModule,
    MenuModule,
    UserOrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
