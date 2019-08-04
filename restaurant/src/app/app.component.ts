import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant';
  viewing_modes = [
    'Home',
    'About',
    'Menu',
    'Contact',
    'Order',
    'Manager',
    'Driver'
  ];

  current_mode = '';
  constructor(){
    this.current_mode = this.viewing_modes[0];
  }
  showHome():void{
    this.current_mode = this.viewing_modes[0];
  }
  showAbout():void{
    this.current_mode = this.viewing_modes[1];
  }
  showMenu(): void {
    this.current_mode = this.viewing_modes[2];
  }
  showContact(): void {
    this.current_mode = this.viewing_modes[3];
  }
  showOrder(): void {
    this.current_mode = this.viewing_modes[4];
  }
  goManager():void{
    this.current_mode = this.viewing_modes[5];
  }
  goDriver():void{
    this.current_mode = this.viewing_modes[6];
  }
}
