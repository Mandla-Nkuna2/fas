import { Component, OnInit } from '@angular/core';
import FixedCostTransfer from 'src/app/models/capture/FixedCostTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-fixedcostransfer',
  templateUrl: './fixedcostransfer.page.html',
  styleUrls: ['./fixedcostransfer.page.scss'],
})
export class FixedcostransferPage implements OnInit {
  fixedCostTransf: FixedCostTransfer;

  registration: any[];
  costCentre: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.fixedCostTransf = new FixedCostTransfer();
  }

  ngOnInit() {
    // this.onRegistration()
    // this.onCostCentre()
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_FixedCosts',
        Object.assign({}, this.fixedCostTransf),
        this.fixedCostTransf.FixedcostTransGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
