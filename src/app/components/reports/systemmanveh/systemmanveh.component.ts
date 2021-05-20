import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systemmanveh',
  templateUrl: './systemmanveh.component.html',
  styleUrls: ['./systemmanveh.component.scss'],
})
export class SystemmanvehComponent implements OnInit {
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
