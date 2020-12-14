import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btn = 'menu';
  openMenu() {
    if(this.btn=='menu'){
      this.btn = 'clear';
      document.getElementById("menu").style.transform = 'rotate(180deg)';
    }
    else{
      this.btn = 'menu'
      document.getElementById("menu").style.transform = 'rotate(-180deg)';
    }
  }

}
