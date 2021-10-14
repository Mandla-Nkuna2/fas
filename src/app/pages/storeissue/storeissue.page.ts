import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import StoreIssue from 'src/app/models/capture/StoreIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-storeissue',
  templateUrl: './storeissue.page.html',
  styleUrls: ['./storeissue.page.scss'],
})
export class StoreissuePage implements OnInit {
  organization = 'InnTee';
  storeIssue: StoreIssue;
  storeIssues: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  registrations: any[];
  MaintEvRefNo: any[];
  supplier: any;
  storeItem: any;
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.storeIssue = new StoreIssue();
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
      this.onRegistration();
      this.onSupplier();
      this.onStoreItem();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStoreIssues(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.storeIssues = mNm;
          this.onStoreItemLeft();
          this.onMaintEvRefNoLeft();
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
        .getStoreIssuesNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.storeIssues = mNm;
          this.onStoreItemLeft();
          this.onMaintEvRefNoLeft();
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
        .getStoreIssuesPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.storeIssues = mNm;
          this.onStoreItemLeft();
          this.onMaintEvRefNoLeft();
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
        .getStoreIssuesLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.storeIssues = mNm;
          this.onStoreItemLeft();
          this.onMaintEvRefNoLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goSupplierDeposit() {
    this.navCtrl.navigateForward('main/supdeposit');
  }

  isNumber(value) {
    return Number.isNaN(value);
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registrations = mNm;
      });
  }

  onMaintEvRefNoLeft() {
    this.firebaseGetServ
      .getMaintEvRefNoLeft(this.organization)
      .then((mNm: any) => {
        this.MaintEvRefNo = mNm;
      });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier(this.organization).then((mNm: any) => {
      this.supplier = mNm;
    });
  }
  onSupplierleft() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.supplier = mNm;
    });
  }

  onStoreItem() {
    this.firebaseGetServ.getStoreItem(this.organization).then((mNm: any) => {
      this.storeItem = mNm;
    });
  }
  onStoreItemLeft() {
    this.firebaseGetServ
      .getStoreItemLeft(this.organization)
      .then((mNm: any) => {
        this.storeItem = mNm;

        mNm.forEach((elm) => {
          this.storeIssues.forEach((obj) => {
            if (elm.StoreCatgItemGuid == obj.StoreCatgItemGuid) {
              obj.StoreCatgItem = elm.StoreCatgItem;
            }
          });
        });
      });
  }

  onAdd() {
    this.storeIssue.StoreIssueGuid = uuidv4();
    this.storeIssue.CaptureName = this.returnedUser.UserFirstName;

    if (this.storeIssue.ItemGuid)
      this.storeIssue.RegIndex = this.storeIssue.ItemGuid['Reg'];
    if (this.storeIssue.ItemGuid)
      this.storeIssue.ItemGuid = this.storeIssue.ItemGuid['ItemGuid'];
    if (this.storeIssue.MaintEvntGuid)
      this.storeIssue.MaintEvntGuid =
        this.storeIssue.MaintEvntGuid['MaintEvntGuid'];
    if (this.storeIssue.SuppGuid)
      this.storeIssue.SuppGuid = this.storeIssue.SuppGuid['SuppGuid'];
    if (this.storeIssue.StoreCatgItemGuid)
      this.storeIssue.StoreCatgItemGuid =
        this.storeIssue.StoreCatgItemGuid['StoreCatgItemGuid'];

    console.log(this.storeIssue);
    this.firebaseService
      .writeData(
        this.organization,
        'Trn_StoreIssue',
        Object.assign({}, this.storeIssue),
        this.storeIssue.StoreIssueGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.storeIssue = new StoreIssue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.ItemGuid = { ItemGuid: item.ItemGuid, Reg: item.RegIndex };
    item.StoreCatgItemGuid = {
      StoreCatgItemGuid: item.StoreCatgItemGuid,
      StoreCatgItem: item.StoreCatgItem,
    };

    this.MaintEvRefNo.forEach((elm) => {
      if (elm.MaintEvntGuid == item.MaintEvntGuid)
        item.MaintEvntGuid = {
          MaintEvntGuid: item.MaintEvntGuid,
          RefNo: elm.RefNo,
        };
    });

    this.supplier.forEach((elm) => {
      if (elm.SuppGuid == item.SuppGuid)
        item.SuppGuid = {
          SuppGuid: item.SuppGuid,
          SuppName: elm.SuppName,
        };
    });

    this.storeIssue = item;
    this.editBool = true;
  }

  onModify() {
    if (this.storeIssue.ItemGuid)
      if (this.storeIssue.ItemGuid['Reg'])
        this.storeIssue.RegIndex = this.storeIssue.ItemGuid['Reg'];
    if (this.storeIssue.ItemGuid)
      if (this.storeIssue.ItemGuid['ItemGuid'])
        this.storeIssue.ItemGuid = this.storeIssue.ItemGuid['ItemGuid'];
    if (this.storeIssue.MaintEvntGuid)
      if (this.storeIssue.MaintEvntGuid['MaintEvntGuid'])
        this.storeIssue.MaintEvntGuid =
          this.storeIssue.MaintEvntGuid['MaintEvntGuid'];
    if (this.storeIssue.SuppGuid)
      if (this.storeIssue.SuppGuid['SuppGuid'])
        this.storeIssue.SuppGuid = this.storeIssue.SuppGuid['SuppGuid'];
    if (this.storeIssue.StoreCatgItemGuid)
      if (this.storeIssue.StoreCatgItemGuid['StoreCatgItemGuid'])
        this.storeIssue.StoreCatgItemGuid =
          this.storeIssue.StoreCatgItemGuid['StoreCatgItemGuid'];

    console.log(this.storeIssue);
    this.firebaseService
      .writeData(
        this.organization,
        'Trn_StoreIssue',
        Object.assign({}, this.storeIssue),
        this.storeIssue.StoreIssueGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.storeIssue = new StoreIssue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
