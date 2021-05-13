import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import SupplierDeposit from 'src/app/models/SupplierDeposit.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-supdeposit',
  templateUrl: './supdeposit.page.html',
  styleUrls: ['./supdeposit.page.scss'],
})
export class SupdepositPage implements OnInit {
  supplierDeposit: SupplierDeposit

  supplier: any[]

  constructor(private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.supplierDeposit = new SupplierDeposit()
   }

  ngOnInit() {
    // this.onSupplierName()
  }

  goFuelnOilPrice()
  {
    this.navCtrl.navigateForward('fuelnoilprice');
  }

  onSupplierName(){
    this.firebaseGetServ.getSupplier().then((mNm: any) => {
      this.supplier = mNm
    })
  }
  onSupplierNameLeft(){
    this.firebaseGetServ.getSupplierLeft().then((mNm: any) => {
      this.supplier = mNm
    })
  }
}
