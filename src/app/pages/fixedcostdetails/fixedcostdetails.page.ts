import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import FixedCostsDet from 'src/app/models/capture/FixedCostsDet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fixedcostdetails',
  templateUrl: './fixedcostdetails.page.html',
  styleUrls: ['./fixedcostdetails.page.scss'],
})
export class FixedcostdetailsPage implements OnInit {
  organization = 'InnTee';
  fixedCost: FixedCostsDet;
  fixedCosts: any[] = [];
  items: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  fixedCostType: any[];
  registration: any[];
  calcPeriod = ['Annum', 'Monthly'];
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
    this.fixedCost = new FixedCostsDet();
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
        .getFixedCostDetails(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          mNm.forEach((elm) => {
            elm.FixedCostTyp = elm.FixedCostType;
          });
          this.fixedCosts = mNm;
          this.onRegistrationLeft();
          this.onFixedCostType();
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
        .getFixedCostDetailsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          mNm.forEach((elm) => {
            elm.FixedCostTyp = elm.FixedCostType;
          });
          this.fixedCosts = mNm;
          this.onRegistrationLeft();
          this.onFixedCostType();
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
        .getFixedCostDetailsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          mNm.forEach((elm) => {
            elm.FixedCostTyp = elm.FixedCostType;
          });
          this.fixedCosts = mNm;
          this.onRegistrationLeft();
          this.onFixedCostType();
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
        .getFixedCostDetailsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          mNm.forEach((elm) => {
            elm.FixedCostTyp = elm.FixedCostType;
          });
          this.fixedCosts = mNm;
          this.onRegistrationLeft();
          this.onFixedCostType();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registration = mNm;

        mNm.forEach((elm) => {
          this.fixedCosts.forEach((obj) => {
            if (obj.ItemGuid == elm.ItemGuid) {
              obj.Item = elm.Reg;
            }
          });
        });
      });
  }

  onFixedCostType() {
    this.firebaseGetServ
      .getFixedCostType(this.organization)
      .then((mNm: any) => {
        this.fixedCostType = mNm;
      });
  }

  goTransfer() {
    this.navCtrl.navigateForward('main/fixedcostransfer');
  }

  onAdd() {
    this.fixedCost.FixedCostGuid = uuidv4();
    this.fixedCost.CaptureName = this.returnedUser.UserFirstName;

    if (this.fixedCost.FixedCostType)
      this.fixedCost.FixedCostType =
        this.fixedCost.FixedCostType['FixedCostType'];
    if (this.fixedCost.ItemGuid)
      this.fixedCost.ItemGuid = this.fixedCost.ItemGuid['ItemGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_FixedCosts',
        Object.assign({}, this.fixedCost),
        this.fixedCost.FixedCostGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fixedCost = new FixedCostsDet();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.FixedCostType = {
      FixedCostTypeGuid: item.FixedCostGuid,
      FixedCostType: item.FixedCostType,
    };
    item.ItemGuid = {
      ItemGuid: item.ItemGuid,
      Reg: item.Item,
    };

    this.fixedCost = item;
    this.editBool = true;
  }

  onModify() {
    if (this.fixedCost.FixedCostType)
      if (this.fixedCost.FixedCostType['FixedCostType'])
        this.fixedCost.FixedCostType =
          this.fixedCost.FixedCostType['FixedCostType'];
    if (this.fixedCost.ItemGuid)
      if (this.fixedCost.ItemGuid['ItemGuid'])
        this.fixedCost.ItemGuid = this.fixedCost.ItemGuid['ItemGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_FixedCosts',
        Object.assign({}, this.fixedCost),
        this.fixedCost.FixedCostGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fixedCost = new FixedCostsDet();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
