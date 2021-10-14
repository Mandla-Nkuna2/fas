import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  organization = 'InnTee';
  bowserTransac: BowserTransaction;
  bowserTransacs: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  suppliers: any[];
  costCentre: any[];
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.bowserTransac = new BowserTransaction();
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
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowserTransactions(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.bowserTransacs = mNm;
          this.onSupplier();
          this.onCostCentreLeft();
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
        .getBowserTransactionsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.bowserTransacs = mNm;
          this.onSupplier();
          this.onCostCentreLeft();
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
        .getBowserTransactionsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.bowserTransacs = mNm;
          this.onSupplier();
          this.onCostCentreLeft();
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
        .getBowserTransactionsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.bowserTransacs = mNm;
          this.onSupplier();
          this.onCostCentreLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goBrowserTransfer() {
    this.navCtrl.navigateForward('main/browsertransfer');
  }

  onSupplier() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.suppliers = mNm;
    });
  }

  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((staff: any) => {
        this.costCentre = staff;

        staff.forEach((elm) => {
          this.bowserTransacs.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentGuid) {
              obj.CostCent = elm.CostCentName;
            }
          });
        });
      });
  }

  onAdd() {
    this.bowserTransac.BowserTrnGuid = uuidv4();
    this.bowserTransac.CaptureName = this.returnedUser.UserFirstName;

    if (this.bowserTransac.SuppGuid)
      this.bowserTransac.SuppGuid = this.bowserTransac.SuppGuid['SuppGuid'];
    if (this.bowserTransac.CostCentGuid)
      this.bowserTransac.CostCentGuid =
        this.bowserTransac.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Bowsers',
        Object.assign({}, this.bowserTransac),
        this.bowserTransac.BowserTrnGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.bowserTransac = new BowserTransaction();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.CostCentGuid = {
      CostCentGuid: item.CostCentGuid,
      CostCentName: item.CostCent,
    };

    this.suppliers.forEach((elm) => {
      if (elm.SuppGuid == item.SuppGuid) {
        item.SuppGuid = {
          SuppGuid: item.SuppGuid,
          SuppName: elm.SuppName,
        };
      }
    });

    this.bowserTransac = item;
    this.editBool = true;
  }

  onModify() {
    if (this.bowserTransac.SuppGuid)
      if (this.bowserTransac.SuppGuid['SuppGuid'])
        this.bowserTransac.SuppGuid = this.bowserTransac.SuppGuid['SuppGuid'];
    if (this.bowserTransac.CostCentGuid)
      if (this.bowserTransac.CostCentGuid['CostCentGuid'])
        this.bowserTransac.CostCentGuid =
          this.bowserTransac.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Bowsers',
        Object.assign({}, this.bowserTransac),
        this.bowserTransac.BowserTrnGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.bowserTransac = new BowserTransaction();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
