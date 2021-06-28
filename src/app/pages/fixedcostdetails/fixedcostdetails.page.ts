import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import FixedCostsDet from 'src/app/models/capture/FixedCostsDet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-fixedcostdetails',
  templateUrl: './fixedcostdetails.page.html',
  styleUrls: ['./fixedcostdetails.page.scss'],
})
export class FixedcostdetailsPage implements OnInit {
  fixedCost: FixedCostsDet;

  fixedCostType: any[];
  registration: any[];
  calcPeriod = ['Annum', 'Montly'];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.fixedCost = new FixedCostsDet();
  }

  ngOnInit() {
    this.onFixedCostType();
    this.onRegistraion();
  }

  goTransfer() {
    this.navCtrl.navigateForward('fixedcostransfer');
  }

  onFixedCostType() {
    this.firebaseGetServ.getFixedCostType().then((mNm: any) => {
      this.fixedCostType = mNm;
    });
  }

  onRegistraion() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistraionLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_FixedCosts',
        Object.assign({}, this.fixedCost),
        this.fixedCost.FixedCostGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
