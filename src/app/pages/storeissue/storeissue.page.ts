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
    public afAuth: AngularFireAuth,
  ) {
    this.storeIssue = new StoreIssue();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStoreIssues(this.organization)
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
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registration = mNm;
      });
  }

  onMaintEvRefNo() {
    this.firebaseGetServ.getMaintEvRefNo(this.organization).then((mNm: any) => {
      this.MaintEvRefNo = mNm;
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
            if (elm.StoreCatgGuid == obj.StoreCatgItemGuid) {
              obj.StoreCatgItem = elm.StoreCatgItem;
            }
          });
        });
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

      this.onTableRep();
      this.onRegistration();
      this.onMaintEvRefNo();
      this.onSupplier();
      this.onStoreItem();
    });
  }

  onAdd() {
    this.storeIssue.StoreIssueGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
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
