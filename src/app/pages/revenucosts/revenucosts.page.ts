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

      this.onTableRep();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAsset(this.organization)
        .then((mNm: any) => {
          this.runningCosts = mNm;
          this.onItemTypeLeft();
          this.onItemMakMod();
          this.onLocationLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
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

  onItemTypeLeft() {
    this.firebaseGetServ.getItemType(this.organization).then((mNm: any) => {
      this.itemTypes = mNm;

      mNm.forEach((elm) => {
        this.runningCosts.forEach((obj) => {
          if (elm.ItemTypeGuid == obj.ItemTypeGuid) {
            obj.ItemType = elm.ItemTypeNameGuid;
          }
        });
      });
    });
    this.onItemTypeNameLeft();
  }

  onItemTypeNameLeft() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        this.itemTypes = mNm;

        mNm.forEach((elm) => {
          this.runningCosts.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemType) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
      });
  }

  onLocationLeft() {
    this.firebaseRepServ
      .getLocationsLeft(this.organization)
      .then((mNm: any) => {
        this.locations = mNm;

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
