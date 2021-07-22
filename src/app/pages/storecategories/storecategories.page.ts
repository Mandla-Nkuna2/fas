import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import StoreCategory from 'src/app/models/supportdata/StoreCategories.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-storecategories',
  templateUrl: './storecategories.page.html',
  styleUrls: ['./storecategories.page.scss'],
})
export class StorecategoriesPage implements OnInit {
  storeCat: StoreCategory;
  storeCats: StoreCategory[] = [];

  storeCatItemsView = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.storeCat = new StoreCategory();
  }

  ngOnInit() {
    // this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getMaintEvent()
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
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
