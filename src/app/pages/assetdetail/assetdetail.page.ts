import { FirebaseReportService } from './../../services/firebase-service/firebase-report.service';
import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.page.html',
  styleUrls: ['./assetdetail.page.scss'],
})
export class AssetdetailPage implements OnInit {
  organization = 'InnTee';
  assets: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  moreDet = false;
  assetTypes: any[];
  assetTypeNames: any[];
  makesAndMods: any[];
  categories: any[];
  tblNext = true;
  tblPrev = true;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService,
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
        .getAsset(this.organization)
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
        .getAssetNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.assets = mNm;
          this.onAssetType();
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
        .getAssetPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.assets = mNm;
          this.onAssetType();
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
        .getAssetLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.assets = mNm;
          this.onAssetType();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onAssetType() {
    this.firebaseGetServ.getItemType(this.organization).then((mNm: any) => {
      this.assetTypes = mNm;

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
        this.assetTypeNames = mNm;

        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemTypeNameGuid) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
        this.onTypeClassLeft();
      });
  }

  onTypeClassLeft() {
    this.firebaseGetServ
      .getItemTypeClassLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemTypeClassGuid == obj.ItemTypeClassGuid) {
              obj.ItemTypeClass = elm.ItemTypeClass;
            }
          });
        });
        this.onTypeCapacityLeft();
        this.onMakeAndMod();
      });
  }

  onTypeCapacityLeft() {
    this.firebaseGetServ
      .getTypeCapacityLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assets.forEach((obj) => {
            if (elm.ItemTypeCapGuid == obj.ItemTypeCapGuid) {
              obj.ItemTypeCap = elm.ItemTypeCap + ' ' + obj.ItemTypeUnit;
            }
          });
        });
        this.onTypeDsplyName();
      });
  }

  onTypeDsplyName() {
    this.assets.forEach((obj) => {
      obj.displayName = obj.ItemTypeName;

      if (obj.ItemTypeClass)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeClass;

      if (obj.ItemTypeCap)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeCap;
    });
  }

  onMakeAndMod() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        this.makesAndMods = mNm;

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

  onEdit(item) {
    this.firebaseService.assetSubj.next(item);
    this.navCtrl.navigateForward('main/addassets');
  }
}
