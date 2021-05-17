import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costingschedul',
  templateUrl: './costingschedul.component.html',
  styleUrls: ['./costingschedul.component.scss'],
})
export class CostingschedulComponent implements OnInit {
  dateScope: any
  locOrReg: any
  maintType = [
    'Accident',
    'Fuel',
    'G.E.T',
    'Oil',
    'Repair',
    'Service',
    'Tyre / Track',
  ]

  constructor() { }

  ngOnInit() {}

}
