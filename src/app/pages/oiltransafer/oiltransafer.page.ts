import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilStoreTransfer from 'src/app/models/capture/OilStoreTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oiltransafer',
  templateUrl: './oiltransafer.page.html',
  styleUrls: ['./oiltransafer.page.scss'],
})
export class OiltransaferPage implements OnInit {
  oilStoreTransf: OilStoreTransfer;
  oilStoreTransfs: OilStoreTransfer[] = [];

  voucherNo: any[];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];
  oilTypes: any[];
  oilStoreFrom: any[];
  oilStoreTo: any[];
  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilStoreTransf = new OilStoreTransfer();
  }

  ngOnInit() {
    this.onTableRep();
    this.onOilType();
    this.onOilStoreFrom();
    this.onOilStoreTo();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilStoreTransf()
        .then((mNm: any) => {
          this.oilStoreTransfs = mNm;
          this.onOilTypeLeft();
          this.onOilStoreFrom();
          this.onOilStoreTo();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goOverhead() {
    this.navCtrl.navigateForward('overheadtrans');
  }

  onOilType() {
    this.firebaseGetServ.getOilMake().then((mNm: any) => {
      this.oilMakes = mNm;
    });
    this.firebaseGetServ.getOilGrade().then((mNm: any) => {
      this.oilGrades = mNm;
    });
    this.firebaseGetServ.getOilClass().then((mNm: any) => {
      this.oilClasses = mNm;
    });

    this.firebaseGetServ.getOilType().then((mNm: any) => {
      mNm.forEach((oilObj) => {
        this.oilMakes.forEach((oilM) => {
          if (oilM.OilMakeGuid == oilObj.OilMakeGuid) {
            oilObj.OilMake = oilM.OilMake;
          }
        });

        this.oilGrades.forEach((oilG) => {
          if (oilG.OilGradeGuid == oilObj.OilGradeGuid) {
            oilObj.OilGrade = oilG.OilGrade;
          }
        });

        this.oilClasses.forEach((oilC) => {
          if (oilC.OilClassGuid == oilObj.OilClassGuid) {
            oilObj.OilClass = oilC.OilClass;
          }
        });

        oilObj.OilText =
          oilObj.OilMake + ' ' + oilObj.OilGrade + ' ' + oilObj.OilClass;
      });
      this.oilTypes = mNm;
    });
  }
  onOilTypeLeft() {
    this.firebaseGetServ.getOilTypeLeft().then((mNm: any) => {
      mNm.forEach((oilObj) => {
        this.oilMakes.forEach((oilM) => {
          if (oilM.OilMakeGuid == oilObj.OilMakeGuid) {
            oilObj.OilMake = oilM.OilMake;
          }
        });

        this.oilGrades.forEach((oilG) => {
          if (oilG.OilGradeGuid == oilObj.OilGradeGuid) {
            oilObj.OilGrade = oilG.OilGrade;
          }
        });

        this.oilClasses.forEach((oilC) => {
          if (oilC.OilClassGuid == oilObj.OilClassGuid) {
            oilObj.OilClass = oilC.OilClass;
          }
        });

        oilObj.OilText =
          oilObj.OilMake + ' ' + oilObj.OilGrade + ' ' + oilObj.OilClass;
      });
      this.oilTypes = mNm;

      this.oilTypes.forEach((elm) => {
        this.oilStoreTransfs.forEach((obj) => {
          if (elm.OilGuid == obj.OilTypeGuid) {
            obj.OilTypeGuid = elm.OilText;
          }
        });
      });
    });
  }

  onOilStoreFrom() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStoreFrom = mNm;

      mNm.forEach((elm) => {
        this.oilStoreTransfs.forEach((obj) => {
          if (elm.OilStoreGuid == obj.OilStoreFromGuid) {
            obj.OilStoreFromGuid = elm.OilStoreName;
          }
        });
      });
    });
  }

  onOilStoreTo() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStoreTo = mNm;

      mNm.forEach((elm) => {
        this.oilStoreTransfs.forEach((obj) => {
          if (elm.OilStoreGuid == obj.OilStoreToGuid) {
            obj.OilStoreToGuid = elm.OilStoreName;
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_OilIssue',
        Object.assign({}, this.oilStoreTransf),
        this.oilStoreTransf.OilStoreTrnGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
