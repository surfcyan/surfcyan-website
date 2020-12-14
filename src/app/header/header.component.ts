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
    if (this.btn == 'menu') {
      this.btn = 'clear';
      document.getElementById("menuBtn").style.transform = 'rotate(180deg)';

      document.getElementById("menu").style.visibility = 'visible'
      document.getElementById("menu").style.opacity = "1"
    }
    else {
      this.btn = 'menu'
      document.getElementById("menuBtn").style.transform = 'rotate(-180deg)';

      document.getElementById("menu").style.opacity = "0"
      document.getElementById("menu").style.visibility = 'hidden'
    }
  }

}
