import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
 
import { AppComponent } from './app.component';
import { MenuItemModule } from '../menu-item/menu-item.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
