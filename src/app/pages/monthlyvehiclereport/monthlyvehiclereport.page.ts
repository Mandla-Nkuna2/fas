import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Asset } from 'src/app/models/capture/Asset.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-monthlyvehiclereport',
  templateUrl: './monthlyvehiclereport.page.html',
  styleUrls: ['./monthlyvehiclereport.page.scss'],
})
export class MonthlyvehiclereportPage implements OnInit {
  assets: any[] = [];

  assetTypes: any[];
  assetTypeNames: any[];
  makesAndMods: any[];

  constructor(
    private navCtrl: NavController,
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
    this.firebaseGetServ.getAssetMakenModelLeft().then((mNm: any) => {
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

  goDetails() {
    this.navCtrl.navigateForward('monthlyvrdetail');
  }
}
