import { Component, OnInit } from '@angular/core';
import OilStore from 'src/app/models/supportdata/OilStore.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';

@Component({
  selector: 'app-oilstore',
  templateUrl: './oilstore.page.html',
  styleUrls: ['./oilstore.page.scss'],
})
export class OilstorePage implements OnInit {
  oilStore: OilStore;
  loc: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilStore = new OilStore();
  }

  ngOnInit() {
    this.onOsLocation();
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
