import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemmanmajequip',
  templateUrl: './systemmanmajequip.component.html',
  styleUrls: ['./systemmanmajequip.component.scss'],
})
export class SystemmanmajequipComponent implements OnInit {
  dateScope: any
  locOrReg: any
  maintType = [
    'Accident',
    'G.E.T',
    'Repair',
    'Service',
    'Tyre / Track',
  ]

  constructor() { }

  ngOnInit() {}

}
