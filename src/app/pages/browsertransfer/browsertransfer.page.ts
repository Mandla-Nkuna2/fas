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
  returnedUser: any;
  voucherNo: any[];
  costCentre: any;
  bowsers: any[];
  editBool = false;

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

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowserTransfers(this.organization)
        .then((mNm: any) => {
          this.bowserTransfers = mNm;
          console.log(mNm);
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
    this.firebaseGetServ.getBowserLeft(this.organization).then((mNm: any) => {
      this.bowsers = mNm;

      mNm.forEach((elm) => {
        this.bowserTransfers.forEach((obj) => {
          if (elm.BowserGuid == obj.BowserFromGuid) {
            obj.BowserFrom = elm.BowserName;
          }
        });
      });

      mNm.forEach((elm) => {
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

  onAdd() {
    this.bowserTransfer.FuelTransferGuid = uuidv4();
    this.bowserTransfer.CaptureName = this.returnedUser.UserFirstName;

    if (this.bowserTransfer.BowserFromGuid)
      this.bowserTransfer.BowserFromGuid =
        this.bowserTransfer.BowserFromGuid['BowserGuid'];
    if (this.bowserTransfer.BowserToGuid)
      this.bowserTransfer.BowserToGuid =
        this.bowserTransfer.BowserToGuid['BowserGuid'];
    if (this.bowserTransfer.CostCentGuid)
      this.bowserTransfer.CostCentGuid =
        this.bowserTransfer.CostCentGuid['CostCentGuid'];

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

  onEdit(item) {
    this.bowserTransfer = item;
    this.editBool = true;
  }

  onModify() {
    if (this.bowserTransfer.BowserFromGuid)
      if (this.bowserTransfer.BowserFromGuid['BowserGuid'])
        this.bowserTransfer.BowserFromGuid =
          this.bowserTransfer.BowserFromGuid['BowserGuid'];
    if (this.bowserTransfer.BowserToGuid)
      if (this.bowserTransfer.BowserToGuid['BowserGuid'])
        this.bowserTransfer.BowserToGuid =
          this.bowserTransfer.BowserToGuid['BowserGuid'];
    if (this.bowserTransfer.CostCentGuid)
      if (this.bowserTransfer.CostCentGuid['CostCentGuid'])
        this.bowserTransfer.CostCentGuid =
          this.bowserTransfer.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_BowserTransfer',
        Object.assign({}, this.bowserTransfer),
        this.bowserTransfer.FuelTransferGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.bowserTransfer = new BowserTransfer();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
