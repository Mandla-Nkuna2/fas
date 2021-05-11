import { Operator } from './../../models/DailyOperationRec.model';
import DailyOperationRec from 'src/app/models/DailyOperationRec.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailyoperationrecord',
  templateUrl: './dailyoperationrecord.page.html',
  styleUrls: ['./dailyoperationrecord.page.scss'],
})
export class DailyoperationrecordPage implements OnInit {
  dOpsRec: DailyOperationRec

  registration: any []

  constructor() {
    this.dOpsRec = new DailyOperationRec()
    this.dOpsRec.operator = new Operator()
   }

  ngOnInit() {
  }

  onRegistration(){}
  onRegistrationLeft(){}

  onLoccation(){}
  onLoccationLeft(){}

  onCostCentre(){}
  onCostCentreLeft(){}

  onVoucher(){}
  onVoucherLeft(){}

  onOperatorName(){}
  onOperatorNameLeft(){}

  onRegistrationSel(obj){}

}
