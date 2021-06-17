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
  oilStoreTransf: OilStoreTransfer;

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
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilStoreTransf = new OilStoreTransfer();
  }

  ngOnInit() {
    // this.onOilType()
    // this.onOilStoreFrom()
    // this.onOilStoreTo()
    // this.onCostCentre()
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
    });
  }

  onOilStoreFrom() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStoreFrom = mNm;
    });
  }

  onOilStoreTo() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStoreTo = mNm;
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
