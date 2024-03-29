import { Component, OnInit } from '@angular/core';
import OilStore from 'src/app/models/supportdata/OilStore.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-oilstore',
  templateUrl: './oilstore.page.html',
  styleUrls: ['./oilstore.page.scss'],
})
export class OilstorePage implements OnInit {
  oilStore: OilStore;
  oilStores: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  loc: any[];
  locObjs: any[];
  organization = 'InnTee';
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
    this.oilStore = new OilStore();
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
      this.onOsLocation();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOilstores(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.oilStores = mNm;
          this.onLocationLeft();
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
        .getOilstoresNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.oilStores = mNm;
          this.onLocationLeft();
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
        .getOilstoresPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.oilStores = mNm;
          this.onLocationLeft();
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
        .getOilstoresLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.oilStores = mNm;
          this.onLocationLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onOsLocation() {
    this.firebaseGetServ.getLocation(this.organization).then((mNm: any) => {
      this.loc = mNm;
    });
  }
  onOsLocationLeft() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      this.loc = mNm;
    });
  }

  onLocationLeft() {
    this.firebaseRepServ
      .getLocationsLeft(this.organization)
      .then((mNm: any) => {
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
    this.oilStore.OilStoreGuid = uuidv4();
    this.oilStore.CaptureName = this.returnedUser.UserFirstName;
    this.oilStore.Active = 'Y';

    if (this.oilStore.OilStoreLoc)
      this.oilStore.OilStoreLoc = this.oilStore.OilStoreLoc['LocItemCode'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_OilStore',
        Object.assign({}, this.oilStore),
        this.oilStore.OilStoreGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oilStore = new OilStore();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.OilStoreLoc = {
      LocItemCode: item.OilStoreLoc,
      LocDesc: item.OilStoreName,
    };

    this.oilStore = item;
    this.editBool = true;
  }

  onModify() {
    if (this.oilStore.OilStoreLoc)
      if (this.oilStore.OilStoreLoc['LocItemCode'])
        this.oilStore.OilStoreLoc = this.oilStore.OilStoreLoc['LocItemCode'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_OilStore',
        Object.assign({}, this.oilStore),
        this.oilStore.OilStoreGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oilStore = new OilStore();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
