import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OverheadTransaction from 'src/app/models/capture/OverheadTransaction.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-overheadtrans',
  templateUrl: './overheadtrans.page.html',
  styleUrls: ['./overheadtrans.page.scss'],
})
export class OverheadtransPage implements OnInit {
  overheadTrans: OverheadTransaction;
  overheadTranss: any[] = [];

  overheadType: any[];
  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.overheadTrans = new OverheadTransaction();
  }

  ngOnInit() {
    this.onTableRep();
    this.onOverheadType();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOverheadTransf()
        .then((mNm: any) => {
          this.overheadTranss = mNm;
          this.onOverheadType();
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

  goStaffTimeSheet() {
    this.navCtrl.navigateForward('stafftimesheets');
  }

  onOverheadType() {
    this.firebaseGetServ.getOverheadType().then((mNm: any) => {
      this.overheadType = mNm;

      mNm.forEach((elm) => {
        this.overheadTranss.forEach((obj) => {
          if (elm.OverheadTypeGuid == obj.OverheadTypeGuid) {
            obj.OverheadType = elm.OverheadType;
          }
        });
      });
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
        this.overheadTranss.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentGuid) {
            obj.CostCent = elm.CostCentName;
          }
        });
      });
    });
  }

  onAdd() {
    this.overheadTrans.OverheadGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
        'Trn_Overheads',
        Object.assign({}, this.overheadTrans),
        this.overheadTrans.OverheadGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
