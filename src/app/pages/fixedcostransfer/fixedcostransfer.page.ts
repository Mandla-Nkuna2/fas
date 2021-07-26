import { Component, OnInit } from '@angular/core';
import FixedCostTransfer from 'src/app/models/capture/FixedCostTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fixedcostransfer',
  templateUrl: './fixedcostransfer.page.html',
  styleUrls: ['./fixedcostransfer.page.scss'],
})
export class FixedcostransferPage implements OnInit {
  fixedCostTransf: FixedCostTransfer;
  fixedCostTransfs: any[] = [];

  registration: any[];
  costCentre: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.fixedCostTransf = new FixedCostTransfer();
  }

  ngOnInit() {
    this.onTableRep();
    this.onRegistration();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFixedCostTransfer()
        .then((mNm: any) => {
          this.fixedCostTransfs = mNm;
          this.onCostCentreLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
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
  onCostCentreLeft() {
    this.firebaseGetServ.getCostCentreLeft().then((mNm: any) => {
      this.costCentre = mNm;

      mNm.forEach((elm) => {
        this.fixedCostTransfs.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentGuid) {
            obj.CostCent = elm.CostCentName;
          }
        });
      });
    });
  }

  onAdd() {
    this.fixedCostTransf.FixedcostTransGuid = uuidv4();

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
