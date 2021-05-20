import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runningcostsmajequip',
  templateUrl: './runningcostsmajequip.component.html',
  styleUrls: ['./runningcostsmajequip.component.scss'],
})
export class RunningcostsmajequipComponent implements OnInit {
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
