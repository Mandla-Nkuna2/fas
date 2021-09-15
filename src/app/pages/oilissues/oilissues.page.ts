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

  returnedUser: any;
  currentDate = new Date();
  voucherNo: any[];
  registration: any[];
  itemComps: any[];
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
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.afAuth.user.subscribe((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
      this.returnedUser = user;

      this.onTableRep();
      this.onRegistration();
      this.onCompName();
      this.onOilStore();
      this.onSupplier();
      this.onOilType();
      this.onCostCentre();
      this.onStaffCode();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilIssues(this.organization)
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
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registration = mNm;
      });
  }

  onItemCompLeft() {
    this.firebaseGetServ.getItemCompLeft(this.organization).then((mNm: any) => {
      this.itemComps = mNm;

      mNm.forEach((elm) => {
        this.oilIssues.forEach((obj) => {
          if (elm.ItemCompGuid == obj.ItemCompGuid) {
            obj.ItemComp = elm.CompNameGuid;
          }
        });
      });
      this.onCompNameLeft();
    });
  }

  onCompName() {
    this.firebaseGetServ.getCompName(this.organization).then((mNm: any) => {
      this.compNames = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft(this.organization).then((mNm: any) => {
      this.compNames = mNm;

      mNm.forEach((elm) => {
        this.oilIssues.forEach((obj) => {
          if (elm.CompNameGuid == obj.ItemComp) {
            obj.ItemCompName = elm.CompName;
          }
        });

        this.itemComps.forEach((obj) => {
          if (elm.CompNameGuid == obj.CompNameGuid) {
            obj.ItemCompName = elm.CompName;
          }
        });
      });
    });
  }

  onOilStore() {
    this.firebaseGetServ.getOilStore(this.organization).then((mNm: any) => {
      this.oilStore = mNm;
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier(this.organization).then((mNm: any) => {
      this.supplier = mNm;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.supplier = mNm;
    });
  }

  onOilType() {
    this.firebaseGetServ.getOilMake(this.organization).then((mNm: any) => {
      this.oilMakes = mNm;
    });
    this.firebaseGetServ.getOilGrade(this.organization).then((mNm: any) => {
      this.oilGrades = mNm;
    });
    this.firebaseGetServ.getOilClass(this.organization).then((mNm: any) => {
      this.oilClasses = mNm;
    });

    this.firebaseGetServ.getOilType(this.organization).then((mNm: any) => {
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
          oilObj.OilMake + ' / ' + oilObj.OilGrade + ' / ' + oilObj.OilClass;
      });
      this.oilTypes = mNm;
    });
  }
  onOilTypeLeft() {
    this.firebaseGetServ.getOilTypeLeft(this.organization).then((mNm: any) => {
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
          oilObj.OilMake + ' / ' + oilObj.OilGrade + ' / ' + oilObj.OilClass;
      });
      this.oilTypes = mNm;
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre(this.organization).then((mNm: any) => {
      this.costCentre = mNm;
    });
  }
  onCostCentreLft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
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
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.staffCode = mNm;
    });
  }
  onStaffCodeLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
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

  onAdd() {
    this.oilIssue.OilIssueGuid = uuidv4();
    this.oilIssue.CaptureName = this.returnedUser.UserFirstName;

    if (this.oilIssue.ItemGuid)
      this.oilIssue.RegIndex = this.oilIssue.ItemGuid['Reg'];
    if (this.oilIssue.ItemGuid)
      this.oilIssue.ItemGuid = this.oilIssue.ItemGuid['ItemGuid'];
    if (this.oilIssue.ItemCompGuid)
      this.oilIssue.ItemCompGuid = this.oilIssue.ItemCompGuid['ItemCompGuid'];
    if (this.oilIssue.OilStoreGuid)
      this.oilIssue.OilStoreGuid = this.oilIssue.OilStoreGuid['OilStoreGuid'];
    if (this.oilIssue.SupplierGuid)
      this.oilIssue.SupplierGuid = this.oilIssue.SupplierGuid['SuppGuid'];
    if (this.oilIssue.OilTypeGuid)
      this.oilIssue.OilTypeGuid = this.oilIssue.OilTypeGuid['OilGuid'];
    if (this.oilIssue.CostCentGuid)
      this.oilIssue.CostCentGuid = this.oilIssue.CostCentGuid['CostCentGuid'];
    if (this.oilIssue.StaffGuid)
      this.oilIssue.StaffGuid = this.oilIssue.StaffGuid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OilIssue',
        Object.assign({}, this.oilIssue),
        this.oilIssue.OilIssueGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oilIssue = new OilIssue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
