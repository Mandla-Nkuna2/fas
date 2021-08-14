import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  organization = 'InnTee';
  vehicleReps: any[] = [];

  itemTypes: any[];
  itemMakeMods: any[];
  returnedUser: any;

  constructor(
    private navCtrl: NavController,
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
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        this.itemTypes = mNm;

        mNm.forEach((elm) => {
          this.vehicleReps.forEach((obj) => {
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
        this.vehicleReps.forEach((obj) => {
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
          this.vehicleReps.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemType) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
      });
  }

  goDetails() {
    this.navCtrl.navigateForward('servicingdetail');
  }
}
