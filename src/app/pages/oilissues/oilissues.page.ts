import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilIssue from 'src/app/models/capture/OilIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oilissues',
  templateUrl: './oilissues.page.html',
  styleUrls: ['./oilissues.page.scss'],
})
export class OilissuesPage implements OnInit {
  oilIssue: OilIssue;

  voucherNo: any[];
  registration: any[];
  compNames: any[];
  oilStore: any[];
  supplier: any[];
  oilTypes: any[];
  costCentre: any[];
  staffCode: any[];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilIssue = new OilIssue();
  }

  ngOnInit() {
    this.onRegistration();
    this.onComponent();
    this.onOilStore();
    this.onSupplier();
    this.onOilType();
    this.onCostCentre();
    this.onStaffCode();
  }

  goOilTransactions() {
    this.navCtrl.navigateForward('oilstoretrans');
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

  onComponent() {
    this.firebaseGetServ.getCompName().then((mNm: any) => {
      this.compNames = mNm;
    });
  }
  onComponentLeft() {
    this.firebaseGetServ.getCompNameLeft().then((mNm: any) => {
      this.compNames = mNm;
    });
  }

  onOilStore() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStore = mNm;
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier().then((mNm: any) => {
      this.supplier = mNm;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ.getSupplierLeft().then((mNm: any) => {
      this.supplier = mNm;
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

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
    });
  }

  onStaffCode() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm;
    });
  }
  onStaffCodeLeft() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_OilIssue',
        Object.assign({}, this.oilIssue),
        this.oilIssue.OilIssueGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
