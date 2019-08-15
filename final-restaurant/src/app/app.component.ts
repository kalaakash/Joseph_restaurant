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
  copyMessage(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
