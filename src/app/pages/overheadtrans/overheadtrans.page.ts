import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import OverheadTransaction from 'src/app/models/capture/OverheadTransaction.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-overheadtrans',
  templateUrl: './overheadtrans.page.html',
  styleUrls: ['./overheadtrans.page.scss'],
})
export class OverheadtransPage implements OnInit {
  organization = 'InnTee';
  overheadTrans: OverheadTransaction;
  overheadTranss: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  overheadType: any[];
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
    this.overheadTrans = new OverheadTransaction();
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
      this.onOverheadType();
      this.onCostCentre();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOverheadTransf(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.overheadTranss = mNm;
          this.onOverheadType();
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
        .getOverheadTransfNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.overheadTranss = mNm;
          this.onOverheadType();
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
        .getOverheadTransfPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.overheadTranss = mNm;
          this.onOverheadType();
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
        .getOverheadTransfLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.overheadTranss = mNm;
          this.onOverheadType();
          this.onCostCentreLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goStaffTimeSheet() {
    this.navCtrl.navigateForward('main/stafftimesheets');
  }

  onOverheadType() {
    this.firebaseGetServ.getOverheadType(this.organization).then((mNm: any) => {
      this.overheadType = mNm;

      mNm.forEach((elm) => {
        this.overheadTranss.forEach((obj) => {
          if (elm.OverheadTypeGuid == obj.OverheadTypeGuid) {
            obj.OverheadType = elm.OverheadType;
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
  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
        this.costCentre = mNm;

        mNm.forEach((elm) => {
          this.overheadTranss.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentGuid) {
              obj.CostCent = elm.CostCentName;
            }
          });
        });
      });
  }

  onAdd() {
    this.overheadTrans.OverheadGuid = uuidv4();
    this.overheadTrans.CaptureName = this.returnedUser.UserFirstName;

    if (this.overheadTrans.OverheadTypeGuid)
      this.overheadTrans.OverheadTypeGuid =
        this.overheadTrans.OverheadTypeGuid['OverheadTypeGuid'];
    if (this.overheadTrans.CostCentGuid)
      this.overheadTrans.CostCentGuid =
        this.overheadTrans.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Overheads',
        Object.assign({}, this.overheadTrans),
        this.overheadTrans.OverheadGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.overheadTrans = new OverheadTransaction();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.OverheadTypeGuid = {
      OverheadTypeGuid: item.OverheadTypeGuid,
      OverheadType: item.OverheadType,
    };
    item.CostCentGuid = {
      CostCentGuid: item.CostCentGuid,
      CostCentName: item.CostCent,
    };

    this.overheadTrans = item;
    this.editBool = true;
  }

  onModify() {
    if (this.overheadTrans.OverheadTypeGuid)
      if (this.overheadTrans.OverheadTypeGuid['OverheadTypeGuid'])
        this.overheadTrans.OverheadTypeGuid =
          this.overheadTrans.OverheadTypeGuid['OverheadTypeGuid'];
    if (this.overheadTrans.CostCentGuid)
      if (this.overheadTrans.CostCentGuid['CostCentGuid'])
        this.overheadTrans.CostCentGuid =
          this.overheadTrans.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Overheads',
        Object.assign({}, this.overheadTrans),
        this.overheadTrans.OverheadGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.overheadTrans = new OverheadTransaction();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
