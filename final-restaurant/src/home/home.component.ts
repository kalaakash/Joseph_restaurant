import { Component, OnInit } from '@angular/core';
import { HomeInfo } from './home_info';
import { BubbleInfo } from './bubble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bubbles: String[];
  home_info: String[];

  constructor() {
    this.bubbles = BubbleInfo;
    this.home_info = HomeInfo;
  }

  ngOnInit() {
  }

}
