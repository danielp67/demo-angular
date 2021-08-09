import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-main',
  templateUrl: './first-main.component.html',
  styleUrls: ['./first-main.component.scss']
})
export class FirstMainComponent implements OnInit {

  @Input() appareilName !: string;
  @Input() appareilStatus !: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
