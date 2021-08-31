import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.page.html',
  styleUrls: ['./fleet.page.scss'],
})
export class FleetPage implements OnInit {
  fleet: any = [];
  currentDate = new Date();

  constructor() {}

  ngOnInit() {}
}
