import { Component, OnInit } from '@angular/core';
import BowserTransfer from 'src/app/models/BowserTransfer.model';

@Component({
  selector: 'app-browsertransfer',
  templateUrl: './browsertransfer.page.html',
  styleUrls: ['./browsertransfer.page.scss'],
})
export class BrowsertransferPage implements OnInit {
  bowserTransfer: BowserTransfer

  voucherNo: any[]

  constructor() {
    this.bowserTransfer = new BowserTransfer()
   }

  ngOnInit() {
  }

  onVoucherNo(){}
  onVoucherNoLeft(){}

  onCostCentre(){}
  onCostCentreLeft(){}

  onVoucherNoSel(obj){}

}
