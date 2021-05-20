import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runningcostsvehicl',
  templateUrl: './runningcostsvehicl.component.html',
  styleUrls: ['./runningcostsvehicl.component.scss'],
})
export class RunningcostsvehiclComponent implements OnInit {
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
