import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runningcostsmetlesequip',
  templateUrl: './runningcostsmetlesequip.component.html',
  styleUrls: ['./runningcostsmetlesequip.component.scss'],
})
export class RunningcostsmetlesequipComponent implements OnInit {
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
