import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.scss']
})
export class TestcComponent implements OnInit {

  collection:string[]=[''];
  link:string;
  constructor() {
    this.link="https://www.google.com"    
   }

  ngOnInit() {    
  }

add(){
  this.collection.push("");
}  


}
