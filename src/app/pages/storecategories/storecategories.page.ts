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
  returnedUser: any;
  storeCatItemsView = false;
  editBool = false;
  tblNext = true;
  tblPrev = true;

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
        .getStoreCategories(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          console.log(mNm);
          this.tblPrev = true;
          this.tblNext = false;
          this.storeCats = mNm;
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
        .getStoreCategoriesNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.storeCats = mNm;
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
        .getStoreCategoriesPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.storeCats = mNm;
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
        .getStoreCategoriesLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.storeCats = mNm;
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

  onAdd() {
    this.storeCat.StoreCatgGuid = uuidv4();
    this.storeCat.CapName = this.returnedUser.UserFirstName;

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

  onEdit(item) {
    this.storeCat = item;
    this.editBool = true;
  }

  onModify() {
    this.firebaseService
      .writeData(
        this.organization,
        'Sup_StoreCatg',
        Object.assign({}, this.storeCat),
        this.storeCat.StoreCatgGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.storeCat = new StoreCategory();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
