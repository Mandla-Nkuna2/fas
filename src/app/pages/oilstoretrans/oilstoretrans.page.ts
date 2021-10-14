import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import OilStoreTransaction from 'src/app/models/capture/OilStoreTransaction.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-oilstoretrans',
  templateUrl: './oilstoretrans.page.html',
  styleUrls: ['./oilstoretrans.page.scss'],
})
export class OilstoretransPage implements OnInit {
  organization = 'InnTee';
  oilstoreTrans: OilStoreTransaction;
  oilstoreTranss: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  oilStores: any[];
  oilTypes: any[];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];
  suppliers: any[];
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
    this.oilstoreTrans = new OilStoreTransaction();
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
      this.onSupplier();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilStoreTrans(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.oilstoreTranss = mNm;
          this.onOilStore();
          this.onOilType();
          this.onCostCentre();
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
        .getOilStoreTransNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.oilstoreTranss = mNm;
          this.onOilStore();
          this.onOilType();
          this.onCostCentre();
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
        .getOilStoreTransPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.oilstoreTranss = mNm;
          this.onOilStore();
          this.onOilType();
          this.onCostCentre();
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
        .getOilStoreTransLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.oilstoreTranss = mNm;
          this.onOilStore();
          this.onOilType();
          this.onCostCentre();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goOilTransfer() {
    this.navCtrl.navigateForward('main/oiltransafer');
  }

  onOilStore() {
    this.firebaseGetServ.getOilStore(this.organization).then((mNm: any) => {
      this.oilStores = mNm;

      mNm.forEach((elm) => {
        this.oilstoreTranss.forEach((obj) => {
          if (elm.OilStoreGuid == obj.OilStoreGuid) {
            obj.OilStore = elm.OilStoreName;
          }
        });
      });
    });
  }

  onOilType() {
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
        this.oilstoreTranss.forEach((obj) => {
          if (elm.OilGuid == obj.OilTypeguid) {
            obj.OilType = elm.OilText;
          }
        });
      });
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier(this.organization).then((mNm: any) => {
      this.suppliers = mNm;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.suppliers = mNm;
    });
  }

  onCostCentre() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
        this.costCentre = mNm;

        mNm.forEach((elm) => {
          this.oilstoreTranss.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentGuid) {
              obj.CostCent = elm.CostCentName;
            }
          });
        });
      });
  }

  onAdd() {
    this.oilstoreTrans.OilStoreTrnGuid = uuidv4();
    this.oilstoreTrans.CaptureName = this.returnedUser.UserFirstName;

    if (this.oilstoreTrans.OilStoreGuid)
      this.oilstoreTrans.OilStoreGuid =
        this.oilstoreTrans.OilStoreGuid['OilStoreGuid'];
    if (this.oilstoreTrans.OilTypeguid)
      this.oilstoreTrans.OilTypeguid =
        this.oilstoreTrans.OilTypeguid['OilGuid'];
    if (this.oilstoreTrans.SuppGuid)
      this.oilstoreTrans.SuppGuid = this.oilstoreTrans.SuppGuid['SuppGuid'];
    if (this.oilstoreTrans.CostCentGuid)
      this.oilstoreTrans.CostCentGuid =
        this.oilstoreTrans.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OilStores',
        Object.assign({}, this.oilstoreTrans),
        this.oilstoreTrans.OilStoreTrnGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.oilstoreTrans = new OilStoreTransaction();
        this.onTableRep();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.OilStoreGuid = {
      OilStoreGuid: item.OilStoreGuid,
      OilStoreName: item.OilStore,
    };
    item.OilTypeguid = {
      OilGuid: item.OilTypeguid,
      OilText: item.OilType,
    };
    item.CostCentGuid = {
      CostCentGuid: item.CostCentGuid,
      CostCentName: item.CostCent,
    };

    this.suppliers.forEach((elm) => {
      if (elm.SuppGuid == item.SuppGuid) {
        item.SuppGuid = {
          SuppGuid: item.SuppGuid,
          SuppName: elm.SuppName,
        };
      }
    });

    this.oilstoreTrans = item;
    this.editBool = true;
  }

  onModify() {
    if (this.oilstoreTrans.OilStoreGuid)
      if (this.oilstoreTrans.OilStoreGuid['OilStoreGuid'])
        this.oilstoreTrans.OilStoreGuid =
          this.oilstoreTrans.OilStoreGuid['OilStoreGuid'];
    if (this.oilstoreTrans.OilTypeguid)
      if (this.oilstoreTrans.OilTypeguid['OilGuid'])
        this.oilstoreTrans.OilTypeguid =
          this.oilstoreTrans.OilTypeguid['OilGuid'];
    if (this.oilstoreTrans.SuppGuid)
      if (this.oilstoreTrans.SuppGuid['SuppGuid'])
        this.oilstoreTrans.SuppGuid = this.oilstoreTrans.SuppGuid['SuppGuid'];
    if (this.oilstoreTrans.CostCentGuid)
      if (this.oilstoreTrans.CostCentGuid['CostCentGuid'])
        this.oilstoreTrans.CostCentGuid =
          this.oilstoreTrans.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OilStores',
        Object.assign({}, this.oilstoreTrans),
        this.oilstoreTrans.OilStoreTrnGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oilstoreTrans = new OilStoreTransaction();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
