import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import StoreIssue from 'src/app/models/capture/StoreIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-storeissue',
  templateUrl: './storeissue.page.html',
  styleUrls: ['./storeissue.page.scss'],
})
export class StoreissuePage implements OnInit {
  storeIssue: StoreIssue;
  storeIssues: any[] = [];

  registration: any[];
  MaintEvRefNo: any[];
  supplier: any;
  storeItem: any;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.storeIssue = new StoreIssue();
  }

  ngOnInit() {
    this.onTableRep();
    this.onRegistration();
    this.onMaintEvRefNo();
    this.onSupplier();
    this.onStoreItem();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStoreIssues()
        .then((mNm: any) => {
          this.storeIssues = mNm;
          this.onStoreItemLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goSupplierDeposit() {
    this.navCtrl.navigateForward('supdeposit');
  }

  isNumber(value) {
    return Number.isNaN(value);
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;
    });
  }

  onMaintEvRefNo() {
    this.firebaseGetServ.getMaintEvRefNo().then((mNm: any) => {
      this.MaintEvRefNo = mNm;
    });
  }
  onMaintEvRefNoLeft() {
    this.firebaseGetServ.getMaintEvRefNoLeft().then((mNm: any) => {
      this.MaintEvRefNo = mNm;
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier().then((mNm: any) => {
      this.supplier = mNm;
    });
  }
  onSupplierleft() {
    this.firebaseGetServ.getSupplierLeft().then((mNm: any) => {
      this.supplier = mNm;
    });
  }

  onStoreItem() {
    this.firebaseGetServ.getStoreItem().then((mNm: any) => {
      this.storeItem = mNm;
    });
  }
  onStoreItemLeft() {
    this.firebaseGetServ.getStoreItemLeft().then((mNm: any) => {
      this.storeItem = mNm;

      mNm.forEach((elm) => {
        this.storeIssues.forEach((obj) => {
          if (elm.StoreCatgGuid == obj.StoreCatgItemGuid) {
            obj.StoreCatgItem = elm.StoreCatgItem;
          }
        });
      });
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_StoreIssue',
        Object.assign({}, this.storeIssue),
        this.storeIssue.StoreIssueGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
