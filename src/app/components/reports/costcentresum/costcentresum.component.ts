import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costcentresum',
  templateUrl: './costcentresum.component.html',
  styleUrls: ['./costcentresum.component.scss'],
})
export class CostcentresumComponent implements OnInit {
  dateScope: any
  locOrReg: any
  maintTypes = [
    'Additional costs',
    'Fixed costs',
    'Fuel costs',
    'Lic and COF costs',
    'Maintanance costs',
    'Maintance labour costs',
    'Maintance store issues costs',
    'Oil costs',
    'Traffic fine costs',
  ]

  constructor() { }

  ngOnInit() {}

}
