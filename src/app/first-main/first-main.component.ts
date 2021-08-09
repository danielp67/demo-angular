import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-first-main',
  templateUrl: './first-main.component.html',
  styleUrls: ['./first-main.component.scss']
})
export class FirstMainComponent implements OnInit {

  @Input() appareilName !: string;
  @Input() appareilStatus !: string;
  @Input() index !: number;
  @Input() id !: number;
  appareils : any;

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
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

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
