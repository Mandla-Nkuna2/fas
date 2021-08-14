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
  currentDate = new Date();

  voucherNo: any[];
  costCentre: any;
  bowsers: any[];
  returnedUser: any;

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
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowserTransfers(this.organization)
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
    this.firebaseGetServ.getBowserLeft(this.organization).then((staff: any) => {
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
    this.firebaseGetServ.getCostCentre(this.organization).then((mNm: any) => {
      this.costCentre = mNm;
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
      this.returnedUser = user;

      this.onTableRep();
      this.onCostCentre();
    });
  }

  onAdd() {
    this.bowserTransfer.FuelTransferGuid = uuidv4();
    this.bowserTransfer.CaptureName = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_BowserTransfer',
        Object.assign({}, this.bowserTransfer),
        this.bowserTransfer.FuelTransferGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.bowserTransfer = new BowserTransfer();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
