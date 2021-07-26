import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import BowserTransaction from 'src/app/models/capture/BowserTransaction.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-browsertransactions',
  templateUrl: './browsertransactions.page.html',
  styleUrls: ['./browsertransactions.page.scss'],
})
export class BrowsertransactionsPage implements OnInit {
  bowserTransaction: BowserTransaction;
  bowserTransactions: any[] = [];

  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {
    this.bowserTransaction = new BowserTransaction();
  }

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowserTransactions()
        .then((mNm: any) => {
          this.bowserTransactions = mNm;
          this.onCostCentreLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goBrowserTransfer() {
    this.navCtrl.navigateForward('browsertransfer');
  }

  onCostCentreLeft() {
    this.firebaseGetServ.getCostCentreLeft().then((staff: any) => {
      this.costCentre = staff;

      staff.forEach((elm) => {
        this.bowserTransactions.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentGuid) {
            obj.CostCent = elm.CostCentName;
          }
        });
      });
    });
  }

  onAdd() {
    this.bowserTransaction.BowserTrnGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
        'Trn_Bowsers',
        Object.assign({}, this.bowserTransaction),
        this.bowserTransaction.BowserTrnGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
