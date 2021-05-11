import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilStoreTransfer from 'src/app/models/OilStoreTransfer.model';

@Component({
  selector: 'app-oiltransafer',
  templateUrl: './oiltransafer.page.html',
  styleUrls: ['./oiltransafer.page.scss'],
})
export class OiltransaferPage implements OnInit {
  oilStoreTransf: OilStoreTransfer

  voucherNo: any[]

  constructor( private navCtrl: NavController ) {
    this.oilStoreTransf = new OilStoreTransfer()
   }

  ngOnInit() {
  }

  goOverhead()
  {
    this.navCtrl.navigateForward('overheadtrans');
  }

  onVoucherNo(){}
  onVoucherNoLeft(){}

  onOilType(){}
  onOilTypeLeft(){}

  onOilStoreFrom(){}
  onOilStoreFromLeft(){}

  onOilStoreTo(){}
  onOilStoreToLeft(){}

  onCostCentre(){}
  onCostCentreLeft(){}

  onVoucherNoSel(obj){}

}
