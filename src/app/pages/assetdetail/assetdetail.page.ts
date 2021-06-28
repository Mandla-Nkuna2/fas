import { FirebaseReportService } from './../../services/firebase-service/firebase-report.service';
import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';

@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.page.html',
  styleUrls: ['./assetdetail.page.scss'],
})
export class AssetdetailPage implements OnInit {
  moreDet = false;
  assets: any[];
  assetTypes: any[];
  assetTypeNames: any[];
  makesAndMods: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAsset()
        .then((mNm: any) => {
          this.assets = mNm;
          this.onAssetType();
          this.onMakeAndMod();
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
    this.firebaseGetServ.getItemType().then((mNm: any) => {
      this.assetTypes = mNm;

      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.ItemTypeGuid == obj.ItemTypeGuid) {
            obj.ItemTypeGuid = elm.ItemTypeNameGuid;
          }
        });
      });
    });
    this.onAssetTypeName();
  }

  onAssetTypeName() {
    this.firebaseGetServ.getAssetTypeNameLeft().then((mNm: any) => {
      this.assetTypeNames = mNm;

      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.ItemTypeNameGuid == obj.ItemTypeGuid) {
            obj.ItemTypeGuid = elm.ItemTypeName;
          }
        });
      });
    });
  }

  onMakeAndMod() {
    this.firebaseGetServ.getMakeAndModelLeft().then((mNm: any) => {
      this.makesAndMods = mNm;

      mNm.forEach((elm) => {
        this.assets.forEach((obj) => {
          if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
            obj.ItemMakModGuid = elm.ItemMakMod;
          }
        });
      });
    });
  }
}
