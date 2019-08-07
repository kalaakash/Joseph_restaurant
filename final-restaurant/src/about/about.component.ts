import { Component, OnInit } from '@angular/core';
import{ AboutInfo } from './about_info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info: String[];

  constructor() {
    this.info = AboutInfo;
   }

  ngOnInit() {
  }

}
