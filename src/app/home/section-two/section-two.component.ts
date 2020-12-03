import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {

  @Input() bgColor;

  constructor() { }

  ngOnInit(): void {
  }

}
