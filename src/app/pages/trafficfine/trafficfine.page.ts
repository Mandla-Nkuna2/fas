import { Trafficfine } from './../../models/Trafficfine.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafficfine',
  templateUrl: './trafficfine.page.html',
  styleUrls: ['./trafficfine.page.scss'],
})
export class TrafficfinePage implements OnInit {
  trafficfine: Trafficfine

  constructor() {
    this.trafficfine = new Trafficfine();
  }

  ngOnInit() {
  }

  onMarkAsComplete(){

  }

}
