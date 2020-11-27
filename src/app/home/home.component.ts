import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  audioPlayer: HTMLMediaElement
  ngOnInit(): void {
    this.audioPlayer = document.getElementById('vid') as HTMLMediaElement;
    console.log(this.audioPlayer)
    // this.audioPlayer.play();
  }

}
