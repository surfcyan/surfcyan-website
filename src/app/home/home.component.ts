import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  gradVar;
  bgColor = '#0092a4';

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    var scrollY = $event['target']['defaultView']['scrollY']
    var screenHeight = window.screen.height;

    // var percent = (scrollY/screenHeight)*100
    var percent = (scrollY / screenHeight) * 1000
    // this.gradVar = `linear-gradient(180deg, transparent ${100 - percent}%,#0092a4)`
    this.gradVar = `linear-gradient(180deg, transparent ${100 - percent}%,${this.bgColor})`
    if (scrollY > 3) {
      document.getElementById("bg").style.backgroundColor = 'rgb(0 146 164 / 35%)'
    }
    else {
      document.getElementById("bg").style.backgroundColor = '#000000a3'
    }

    if (scrollY > screenHeight) {
      this.bgColor = '#000';
    }
    else {
      this.bgColor = '#0092a4';
    }

  };

  constructor(private router: Router) {

  }

  audioPlayer: HTMLMediaElement
  n = 0;
  // fontSizeArr = [
  //   '6.5rem', '7.5rem', '5.7em', '5.5rem', '6.5rem', '7.5rem', '6rem', '9.5rem'
  // ]
  fontSizeClassArr = [
    'classOne', 'classTwo', 'classThree', 'classFour', 'classFive', 'classSix', 'classSeven', 'classEight'
  ]

  ngOnInit(): void {
    this.audioPlayer = document.getElementById('vid') as HTMLMediaElement;
    console.log(this.audioPlayer)
    this.audioPlayer.muted = true;
    this.audioPlayer.play();
    this.audioPlayer.loop = true;

    var textArr = [
      "Make your business<br>get on the internet.",
      "Showcase<br>yourself.",
      "A bridge between you<br>and your clients.",
      "Maximize your reach.",
      "Want a website?",
      "SurfCyan",
      "Get on the internet.",
      "Now."
    ]

    document.getElementById("rightText").innerHTML = textArr[this.n];

    var refreshId = setInterval(() => {

      if (this.router.url != '/') {
        clearInterval(refreshId);
      }

      this.n += 1;
      if (this.n > 7)
        this.n = 0
      document.getElementById("rightText").innerHTML = textArr[this.n]
    }, 2000)

  }

  // getFontSize() {
  //   return this.fontSizeArr[this.n];
  // }

  getFontClass() {
    return this.fontSizeClassArr[this.n];
  }

  x = 'classEight'

}
