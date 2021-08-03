import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import OilIssue from 'src/app/models/capture/OilIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-oilissues',
  templateUrl: './oilissues.page.html',
  styleUrls: ['./oilissues.page.scss'],
})
export class OilissuesPage implements OnInit {
  organization = 'InnTee';
  oilIssue: OilIssue;
  oilIssues: any[] = [];

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
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.oilIssue = new OilIssue();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onRegistration();
    this.onComponent();
    this.onOilStore();
    this.onSupplier();
    this.onOilType();
    this.onCostCentre();
    this.onStaffCode();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilIssues()
        .then((mNm: any) => {
          this.oilIssues = mNm;
          this.onItemCompLeft();
          this.onCostCentreLft();
          this.onStaffCodeLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
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

  onItemCompLeft() {
    this.firebaseGetServ.getItemCompLeft().then((mNm: any) => {
      this.compNames = mNm;

      mNm.forEach((elm) => {
        this.oilIssues.forEach((obj) => {
          if (elm.ItemCompGuid == obj.ItemCompGuid) {
            obj.ItemComp = elm.CompNameGuid;
          }
        });
      });
      this.onComponentLeft();
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

      mNm.forEach((elm) => {
        this.oilIssues.forEach((obj) => {
          if (elm.CompNameGuid == obj.ItemComp) {
            obj.ItemCompName = elm.CompName;
          }
        });
      });
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
  onCostCentreLft() {
    this.firebaseGetServ.getCostCentreLeft().then((mNm: any) => {
      this.costCentre = mNm;

      mNm.forEach((elm) => {
        this.oilIssues.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentGuid) {
            obj.CostCent = elm.CostCentName;
          }
        });
      });
    });
  }

  onStaffCode() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm;
    });
  }
  onStaffCodeLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.staffCode = mNm;

      mNm.forEach((elm) => {
        this.oilIssues.forEach((obj) => {
          if (elm.StaffGuid == obj.StaffGuid) {
            obj.Staff = elm.StaffCode;
          }
        });
      });
    });
  }

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.oilIssue.OilIssueGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
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
