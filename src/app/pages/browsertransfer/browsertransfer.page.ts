import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import BowserTransfer from 'src/app/models/capture/BowserTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-browsertransfer',
  templateUrl: './browsertransfer.page.html',
  styleUrls: ['./browsertransfer.page.scss'],
})
export class BrowsertransferPage implements OnInit {
  organization = 'InnTee';
  bowserTransfer: BowserTransfer;
  bowserTransfers: any[] = [];

  voucherNo: any[];
  costCentre: any;
  bowsers: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.bowserTransfer = new BowserTransfer();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowserTransfers()
        .then((mNm: any) => {
          this.bowserTransfers = mNm;
          this.onBowserFromAnTo();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onBowserFromAnTo() {
    this.firebaseGetServ.getBowserLeft().then((staff: any) => {
      this.bowsers = staff;

      staff.forEach((elm) => {
        this.bowserTransfers.forEach((obj) => {
          if (elm.BowserGuid == obj.BowserFromGuid) {
            obj.BowserFrom = elm.BowserName;
          }
        });
      });

      staff.forEach((elm) => {
        this.bowserTransfers.forEach((obj) => {
          if (elm.BowserGuid == obj.BowserToGuid) {
            obj.BowserTo = elm.BowserName;
          }
        });
      });
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
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
    this.bowserTransfer.FuelTransferGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_BowserTransfer',
        Object.assign({}, this.bowserTransfer),
        this.bowserTransfer.FuelTransferGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
