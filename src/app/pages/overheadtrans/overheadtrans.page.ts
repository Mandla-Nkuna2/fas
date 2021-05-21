import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OverheadTransaction from 'src/app/models/capture/OverheadTransaction.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-overheadtrans',
  templateUrl: './overheadtrans.page.html',
  styleUrls: ['./overheadtrans.page.scss'],
})
export class OverheadtransPage implements OnInit {
  overheadTrans: OverheadTransaction

  overheadType: any[]
  costCentre: any [];

  constructor(private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.overheadTrans = new OverheadTransaction()
   }

  ngOnInit() {
    // this.onCostCentre()
  }

  goStaffTimeSheet()
  {
    this.navCtrl.navigateForward('stafftimesheets');
  }

  onOverheadType(){
    // this.firebaseGetServ.getOverheadType().then((mNm: any) => {
    //   this.overheadType = mNm
    // })
  }

  onCostCentre(){
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm
    })
  }
}
