import { Component, OnInit } from '@angular/core';
import BowserTransfer from 'src/app/models/capture/BowserTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-browsertransfer',
  templateUrl: './browsertransfer.page.html',
  styleUrls: ['./browsertransfer.page.scss'],
})
export class BrowsertransferPage implements OnInit {
  bowserTransfer: BowserTransfer;
  bowserTransfers: BowserTransfer[] = [];

  voucherNo: any[];
  costCentre: any;
  bowsers: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.bowserTransfer = new BowserTransfer();
  }

  ngOnInit() {
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
            obj.BowserFromGuid = elm.BowserName;
          }
        });
      });

      staff.forEach((elm) => {
        this.bowserTransfers.forEach((obj) => {
          if (elm.BowserGuid == obj.BowserToGuid) {
            obj.BowserToGuid = elm.BowserName;
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
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
