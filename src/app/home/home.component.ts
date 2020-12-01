import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  gradVar;

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    var scrollY = $event['target']['defaultView']['scrollY']
    var screenHeight = window.screen.height;

    // var percent = (scrollY/screenHeight)*100
    var percent = (scrollY / screenHeight) * 1000
    this.gradVar = `linear-gradient(180deg, transparent ${100 - percent}%,#0092a4)`
  };

  constructor() {

  }

  audioPlayer: HTMLMediaElement
  n = 0;
  // fontSizeArr = [
  //   '4em','5em','3.2em','3em','4em','5em','3.5em','7em'
  // ]
  fontSizeArr = [
    '6.5rem','7.5rem','5.7em','5.5rem','6.5rem','7.5rem','6rem','9.5rem'
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

    setInterval(() => {
      this.n += 1;
      if (this.n > 7)
        this.n = 0
      document.getElementById("rightText").innerHTML = textArr[this.n]
    }, 2000)

  }

  getFontSize() {
    return this.fontSizeArr[this.n];
  }

}
