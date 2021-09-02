import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-revenucosts',
  templateUrl: './revenucosts.page.html',
  styleUrls: ['./revenucosts.page.scss'],
})
export class RevenucostsPage implements OnInit {
  organization = 'InnTee';
  runningCosts: any[] = [];

  itemTypes: any[];
  locations: any;
  returnedUser: any;
  currentDate = new Date();

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
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
        .getAsset(this.organization)
        .then((mNm: any) => {
          this.runningCosts = mNm;
          this.onAssetType();
          this.popUp.dismissLoading();
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
      this.itemTypes = mNm;

      mNm.forEach((elm) => {
        this.runningCosts.forEach((obj) => {
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
          this.runningCosts.forEach((obj) => {
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
          this.runningCosts.forEach((obj) => {
            if (elm.ItemTypeClassGuid == obj.ItemTypeClassGuid) {
              obj.ItemTypeClass = elm.ItemTypeClass;
            }
          });
        });
        this.onTypeCapacityLeft();
        this.onItemMakMod();
        this.onLocationLeft();
      });
  }

  onTypeCapacityLeft() {
    this.firebaseGetServ
      .getTypeCapacityLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.runningCosts.forEach((obj) => {
            if (elm.ItemTypeCapGuid == obj.ItemTypeCapGuid) {
              obj.ItemTypeCap = elm.ItemTypeCap + ' ' + obj.ItemTypeUnit;
            }
          });
        });
        this.onTypeDsplyName();
      });
  }

  onTypeDsplyName() {
    this.runningCosts.forEach((obj) => {
      obj.displayName = obj.ItemTypeName;

      if (obj.ItemTypeClass)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeClass;

      if (obj.ItemTypeCap)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeCap;
    });
  }

  onItemMakMod() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        this.itemTypes = mNm;

        mNm.forEach((elm) => {
          this.runningCosts.forEach((obj) => {
            if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
              obj.ItemMakMod = elm.ItemMakMod;
            }
          });
        });
      });
  }

  onLocationLeft() {
    this.firebaseRepServ
      .getLocationsLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.runningCosts.forEach((obj) => {
            if (elm.LocItemCode == obj.LocItemCode) {
              obj.LocItem = elm.LocDesc;
            }
          });
        });
      });
  }
}
