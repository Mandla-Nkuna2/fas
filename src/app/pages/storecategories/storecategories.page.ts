import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import StoreCategory from 'src/app/models/supportdata/StoreCategories.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-storecategories',
  templateUrl: './storecategories.page.html',
  styleUrls: ['./storecategories.page.scss'],
})
export class StorecategoriesPage implements OnInit {
  organization = 'InnTee';
  storeCat: StoreCategory;
  storeCats: StoreCategory[] = [];

  currentDate = new Date();
  storeCatItemsView = false;
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.storeCat = new StoreCategory();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStoreCategories(this.organization)
        .then((mNm: any) => {
          this.storeCats = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStoreCatItemsView() {
    this.storeCatItemsView = !this.storeCatItemsView;
  }

  onStoreCats() {
    this.firebaseGetServ.getStoreCat(this.organization).then((mNm: any) => {
      this.storeCats = mNm;
    });
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

  onAdd() {
    this.storeCat.StoreCatgGuid = uuidv4();
    this.storeCat.CapName = this.returnedUser.UserFirstName;

    //  if (this.storeCat.UserGroupGuid)
    //    this.storeCat.UserGroupGuid = this.storeCat.UserGroupGuid['UserGroupGuid'];
    //  if (this.storeCat.LocUserCode)
    //    this.storeCat.LocUserCode = this.storeCat.LocstoreCatCode['LocGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_StoreCatg',
        Object.assign({}, this.storeCat),
        this.storeCat.StoreCatgGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.storeCat = new StoreCategory();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
