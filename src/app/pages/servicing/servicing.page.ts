import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Asset } from 'src/app/models/capture/Asset.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-servicing',
  templateUrl: './servicing.page.html',
  styleUrls: ['./servicing.page.scss'],
})
export class ServicingPage implements OnInit {
  vehicleReps: any[] = [];

  itemTypes: any[];
  itemMakeMods: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAsset()
        .then((mNm: any) => {
          this.vehicleReps = mNm;
          this.onItemMakMod();
          this.onItemTypeLeft();
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
    this.firebaseGetServ.getAssetMakenModelLeft().then((mNm: any) => {
      this.itemTypes = mNm;

      mNm.forEach((elm) => {
        this.vehicleReps.forEach((obj) => {
          if (elm.ItemMakModGuid == obj.ItemMakModGuid) {
            obj.ItemMakModGuid = elm.ItemMakMod;
          }
        });
      });
    });
  }

  onItemTypeLeft() {
    this.firebaseGetServ.getItemType().then((mNm: any) => {
      this.itemTypes = mNm;

      mNm.forEach((elm) => {
        this.vehicleReps.forEach((obj) => {
          if (elm.ItemTypeGuid == obj.ItemTypeGuid) {
            obj.ItemTypeGuid = elm.ItemTypeNameGuid;
          }
        });
      });
    });
    this.onItemTypeNameLeft();
  }

  onItemTypeNameLeft() {
    this.firebaseGetServ.getAssetTypeNameLeft().then((mNm: any) => {
      this.itemTypes = mNm;

      mNm.forEach((elm) => {
        this.vehicleReps.forEach((obj) => {
          if (elm.ItemTypeNameGuid == obj.ItemTypeGuid) {
            obj.ItemTypeGuid = elm.ItemTypeName;
          }
        });
      });
    });
  }

  goDetails() {
    this.navCtrl.navigateForward('servicingdetail');
  }
}
