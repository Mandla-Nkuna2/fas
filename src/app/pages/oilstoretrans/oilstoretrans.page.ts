import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilStoreTransaction from 'src/app/models/capture/OilStoreTransaction.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oilstoretrans',
  templateUrl: './oilstoretrans.page.html',
  styleUrls: ['./oilstoretrans.page.scss'],
})
export class OilstoretransPage implements OnInit {
  oilstoreTrans: OilStoreTransaction

  OilStore: any[]
  oilStore: any [];
  costCentre: any [];

  constructor( private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.oilstoreTrans = new OilStoreTransaction()
   }

  ngOnInit() {
  }

  goOilTransfer()
  {
    this.navCtrl.navigateForward('oiltransafer');
  }

  onOilStore(){
    this.firebaseGetServ.getBowser().then((mNm: any) => {
      this.oilStore = mNm
    })
  }
  onOilStoreLeft(){}

  onOilType(){}
  onOilTypeLeft(){}

  onSupplier(){}
  onSupplierLeft(){}

  onCostCentre(){
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm
    })
  }
}
