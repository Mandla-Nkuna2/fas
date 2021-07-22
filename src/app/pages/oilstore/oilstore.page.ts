import { Component, OnInit } from '@angular/core';
import OilStore from 'src/app/models/supportdata/OilStore.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-oilstore',
  templateUrl: './oilstore.page.html',
  styleUrls: ['./oilstore.page.scss'],
})
export class OilstorePage implements OnInit {
  oilStore: OilStore;
  oilStores: any[] = [];

  loc: any[];
  locObjs: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilStore = new OilStore();
  }

  ngOnInit() {
    this.onTableRep();
    this.onOsLocation();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilstores()
        .then((mNm: any) => {
          this.oilStores = mNm;
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

  onOsLocation() {
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.loc = mNm;
    });
  }
  onOsLocationLeft() {
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.loc = mNm;
    });
  }

  onLocationLeft() {
    this.firebaseRepServ.getLocationLeft().then((mNm: any) => {
      this.locObjs = mNm;

      mNm.forEach((elm) => {
        this.oilStores.forEach((obj) => {
          if (elm.LocItemCode == obj.OilStoreLoc) {
            obj.loc = elm.LocDesc;
          }
        });
      });
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_OilStores',
        Object.assign({}, this.oilStore),
        this.oilStore.OilStoreGuid,
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
