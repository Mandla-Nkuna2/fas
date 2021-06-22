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
  oilstoreTrans: OilStoreTransaction;

  oilStores: any[];
  oilTypes: any[];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];
  suppliers: any[];
  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilstoreTrans = new OilStoreTransaction();
  }

  ngOnInit() {
    // this.onOilStore();
    // this.onOilType();
    // this.onSupplier();
    // this.onCostCentre();
  }

  goOilTransfer() {
    this.navCtrl.navigateForward('oiltransafer');
  }

  onOilStore() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStores = mNm;
    });
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

  onSupplier() {
    this.firebaseGetServ.getSupplier().then((mNm: any) => {
      this.suppliers = mNm;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ.getSupplierLeft().then((mNm: any) => {
      this.suppliers = mNm;
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
        'Trn_OilStoreTransfer',
        Object.assign({}, this.oilstoreTrans),
        this.oilstoreTrans.OilStoreTrnGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
