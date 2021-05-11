import { Component, OnInit } from '@angular/core';
import FixedCostTransfer from 'src/app/models/FixedCostTransfer.model';

@Component({
  selector: 'app-fixedcostransfer',
  templateUrl: './fixedcostransfer.page.html',
  styleUrls: ['./fixedcostransfer.page.scss'],
})
export class FixedcostransferPage implements OnInit {
  fixedCostTransf: FixedCostTransfer

  registration: any[]

  constructor() {
    this.fixedCostTransf = new FixedCostTransfer()
   }

  ngOnInit() {
  }

  onRegistration(){}
  onRegistrationLeft(){}

  onCostCentre(){}
  onCostCentreLeft(){}

  onRegistrationSel(obj){}
}
