import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import OilStoreTransfer from 'src/app/models/capture/OilStoreTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-oiltransafer',
  templateUrl: './oiltransafer.page.html',
  styleUrls: ['./oiltransafer.page.scss'],
})
export class OiltransaferPage implements OnInit {
  organization = 'InnTee';
  oilStoreTransf: OilStoreTransfer;
  oilStoreTransfs: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  voucherNo: any[];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];
  oilTypes: any[];
  oilStore: any[];
  costCentre: any[];
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.oilStoreTransf = new OilStoreTransfer();
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
      this.onCostCentre();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilStoreTransf(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.oilStoreTransfs = mNm;
          this.onOilType();
          this.onOilStore();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilStoreTransfNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.oilStoreTransfs = mNm;
          this.onOilType();
          this.onOilStore();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilStoreTransfPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.oilStoreTransfs = mNm;
          this.onOilType();
          this.onOilStore();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilStoreTransfLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.oilStoreTransfs = mNm;
          this.onOilType();
          this.onOilStore();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goOverhead() {
    this.navCtrl.navigateForward('main/overheadtrans');
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

      this.oilTypes.forEach((elm) => {
        this.oilStoreTransfs.forEach((obj) => {
          if (elm.OilGuid == obj.OilTypeGuid) {
            obj.OilType = elm.OilText;
          }
        });
      });
    });
  }

  onOilStore() {
    this.firebaseGetServ.getOilStore(this.organization).then((mNm: any) => {
      this.oilStore = mNm;

      mNm.forEach((elm) => {
        this.oilStoreTransfs.forEach((obj) => {
          if (elm.OilStoreGuid == obj.OilStoreFromGuid) {
            obj.OilStoreFrom = elm.OilStoreName;
          }
          if (elm.OilStoreGuid == obj.OilStoreToGuid) {
            obj.OilStoreTo = elm.OilStoreName;
          }
        });
      });
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre(this.organization).then((mNm: any) => {
      this.costCentre = mNm;
    });
  }
  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
        this.costCentre = mNm;
      });
  }

  onAdd() {
    this.oilStoreTransf.OilStoreTrnGuid = uuidv4();
    this.oilStoreTransf.CaptureName = this.returnedUser.UserFirstName;

    if (this.oilStoreTransf.OilTypeGuid)
      this.oilStoreTransf.OilTypeGuid =
        this.oilStoreTransf.OilTypeGuid['OilGuid'];
    if (this.oilStoreTransf.OilStoreFromGuid)
      this.oilStoreTransf.OilStoreFromGuid =
        this.oilStoreTransf.OilStoreFromGuid['OilStoreGuid'];
    if (this.oilStoreTransf.OilStoreToGuid)
      this.oilStoreTransf.OilStoreToGuid =
        this.oilStoreTransf.OilStoreToGuid['OilStoreGuid'];
    if (this.oilStoreTransf.CostCentGuid)
      this.oilStoreTransf.CostCentGuid =
        this.oilStoreTransf.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OilStoreTransfer',
        Object.assign({}, this.oilStoreTransf),
        this.oilStoreTransf.OilStoreTrnGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.oilStoreTransf = new OilStoreTransfer();
        this.onTableRep();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.OilTypeGuid = {
      OilGuid: item.OilTypeGuid,
      OilText: item.OilType,
    };
    item.OilStoreFromGuid = {
      OilStoreGuid: item.OilStoreFromGuid,
      OilStoreName: item.OilStoreFrom,
    };
    item.OilStoreToGuid = {
      OilStoreGuid: item.OilStoreToGuid,
      OilStoreName: item.OilStoreTo,
    };

    this.costCentre.forEach((elm) => {
      if (elm.CostCentGuid == item.CostCentGuid) {
        item.CostCentGuid = {
          CostCentGuid: item.CostCentGuid,
          CostCentName: elm.CostCentName,
        };
      }
    });

    this.oilStoreTransf = item;
    this.editBool = true;
  }

  onModify() {
    if (this.oilStoreTransf.OilTypeGuid)
      if (this.oilStoreTransf.OilTypeGuid['OilGuid'])
        this.oilStoreTransf.OilTypeGuid =
          this.oilStoreTransf.OilTypeGuid['OilGuid'];
    if (this.oilStoreTransf.OilStoreFromGuid)
      if (this.oilStoreTransf.OilStoreFromGuid['OilStoreGuid'])
        this.oilStoreTransf.OilStoreFromGuid =
          this.oilStoreTransf.OilStoreFromGuid['OilStoreGuid'];
    if (this.oilStoreTransf.OilStoreToGuid)
      if (this.oilStoreTransf.OilStoreToGuid['OilStoreGuid'])
        this.oilStoreTransf.OilStoreToGuid =
          this.oilStoreTransf.OilStoreToGuid['OilStoreGuid'];
    if (this.oilStoreTransf.CostCentGuid)
      if (this.oilStoreTransf.CostCentGuid['CostCentGuid'])
        this.oilStoreTransf.CostCentGuid =
          this.oilStoreTransf.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OilStoreTransfer',
        Object.assign({}, this.oilStoreTransf),
        this.oilStoreTransf.OilStoreTrnGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oilStoreTransf = new OilStoreTransfer();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
