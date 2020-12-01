import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redPos = '100%';
  purplePos = '0%';

  right() {
    if (this.redPos != '0%') { // red appear

      document.getElementById("purple").style.zIndex = '3';
      document.getElementById("red").style.zIndex = '4';

      document.getElementById("purple").style.visibility = 'hidden';
      document.getElementById("red").style.visibility = 'visible';

      this.redPos = '0%';
      this.purplePos = '-100%';
    }
    else { // purple appear

      document.getElementById("purple").style.zIndex = '4';
      document.getElementById("red").style.zIndex = '3';

      document.getElementById("red").style.visibility = 'hidden';
      document.getElementById("purple").style.visibility = 'visible';

      this.purplePos = '0%';
      this.redPos = '100%';
    }
  }
  left() {
    this.purplePos = '100%';
  }

}
