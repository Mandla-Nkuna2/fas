import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilStoreTransfer from 'src/app/models/capture/OilStoreTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oiltransafer',
  templateUrl: './oiltransafer.page.html',
  styleUrls: ['./oiltransafer.page.scss'],
})
export class OiltransaferPage implements OnInit {
  oilStoreTransf: OilStoreTransfer

  voucherNo: any[]
  oilStoreFrom: any [];
  oilStoreTo: any [];
  costCentre: any [];

  constructor( private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.oilStoreTransf = new OilStoreTransfer()
   }

  ngOnInit() {
    // this.onOilStoreFrom()
    // this.onOilStoreTo()
    // this.onCostCentre()
  }

  goOverhead()
  {
    this.navCtrl.navigateForward('overheadtrans');
  }

  onOilType(){}
  onOilTypeLeft(){}

  onOilStoreFrom(){
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStoreFrom = mNm
    })
  }

  onOilStoreTo(){
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStoreTo = mNm
    })
  }

  onCostCentre(){
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm
    })
  }
}
