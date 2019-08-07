import { Component, OnInit } from '@angular/core';
import { HomeInfo } from './home_info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home_info: String[];

  constructor() { 
    this.home_info = HomeInfo;
  }

  ngOnInit() {
  }

}
