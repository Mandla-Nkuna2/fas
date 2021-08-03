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

  storeCatItemsView = false;

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
    this.getCurentUser();
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStoreCategories()
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
    this.firebaseGetServ.getStoreCat().then((mNm: any) => {
      this.storeCats = mNm;
    });
  }

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.storeCat.StoreCatgGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_StoreCatg',
        Object.assign({}, this.storeCat),
        this.storeCat.StoreCatgGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
