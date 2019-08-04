import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  states: String[] = [
    "HOME",
    "ABOUT",
    "CONTACT",
    "MENU"
  ];

  title = 'TASTE MAGIQ';

  currentState: String;

  constructor(){
    this.currentState = this.states[0];
  }
  showHome(){
    this.currentState = this.states[0];
  }
  showAbout(){
    this.currentState = this.states[1];
  }
  showMenu(){
    this.currentState = this.states[3];
  }
  showContact(){
    this.currentState = this.states[2];
  }

}
