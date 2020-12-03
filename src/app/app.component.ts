import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surfCyan';


  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    var scrollY = $event['target']['defaultView']['scrollY']
    var screenHeight = window.screen.height;
    if (scrollY > screenHeight - 500) {
      document.getElementById("header").style.top = '-100%'
    }
    else
      document.getElementById("header").style.top = '0%'
  }

}
