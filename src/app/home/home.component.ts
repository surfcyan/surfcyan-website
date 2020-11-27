import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    var scrollY = $event['target']['defaultView']['scrollY']
    var screenHeight = window.screen.height;
    if(scrollY>(screenHeight/2-100)){
      document.getElementById('bg').classList.add('bgColor')
    }
    else{
      document.getElementById('bg').classList.remove('bgColor')
    }
  };

  constructor() {

  }
  audioPlayer: HTMLMediaElement
  ngOnInit(): void {
    this.audioPlayer = document.getElementById('vid') as HTMLMediaElement;
    console.log(this.audioPlayer)
    this.audioPlayer.muted = true;
    this.audioPlayer.play();
    this.audioPlayer.loop = true;

  }

}
