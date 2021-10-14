import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dailyoperations',
  templateUrl: './dailyoperations.page.html',
  styleUrls: ['./dailyoperations.page.scss'],
})
export class DailyoperationsPage implements OnInit {
  organization = 'InnTee';
  assets: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  tblNext = true;
  tblPrev = true;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {}

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
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getVehicles(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.assets = mNm;
          this.onAssetType();
          this.onMakeAndMod();
          this.onContract();
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
        .getVehiclesNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.assets = mNm;
          this.onAssetType();
          this.onMakeAndMod();
          this.onContract();
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
        .getVehiclesPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.assets = mNm;
          this.onAssetType();
          this.onMakeAndMod();
          this.onContract();
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
        .getVehiclesLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.assets = mNm;
          this.onAssetType();
          this.onMakeAndMod();
          this.onContract();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemGuid == obj.Itemguid) {
              obj.Item = elm.Reg;
            }
          });
        });
      });
  }

  onAssetType() {
    this.firebaseGetServ.getItemType(this.organization).then((mNm: any) => {
      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.ItemTypeGuid == obj.ItemTypeGuid) {
            obj.ItemTypeNameGuid = elm.ItemTypeNameGuid;
            obj.ItemTypeClassGuid = elm.ItemTypeClassGuid;
            obj.ItemTypeCapGuid = elm.ItemTypeCapGuid;
            obj.ItemTypeUnit = elm.ItemTypeUnit;
          }
        });
      });
      this.onAssetTypeName();
    });
  }

  onAssetTypeName() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemTypeNameGuid) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
      });
  }

  onMakeAndMod() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
              obj.ItemMakMod = elm.ItemMake;
              if (elm.ItemModel) obj.ItemMakMod += ' ' + elm.ItemModel;
            }
          });
        });
      });
  }

  onContract() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.LocItemCode == obj.LocItemCode) {
            obj.contract = elm.LocDesc;
          }
        });
      });
    });
  }
}
