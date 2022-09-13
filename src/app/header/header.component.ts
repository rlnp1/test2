import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  info1 = "";
  

  constructor(){

  }
  methods(){
  
  }

  test1(){
    console.log(this.info1)
  }


}
