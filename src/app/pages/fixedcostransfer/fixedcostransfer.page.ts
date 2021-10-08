import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import FixedCostTransfer from 'src/app/models/capture/FixedCostTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fixedcostransfer',
  templateUrl: './fixedcostransfer.page.html',
  styleUrls: ['./fixedcostransfer.page.scss'],
})
export class FixedcostransferPage implements OnInit {
  organization = 'InnTee';
  fixedCostTransf: FixedCostTransfer;
  fixedCostTransfs: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  registration: any[];
  costCentre: any[];
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.fixedCostTransf = new FixedCostTransfer();
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
      this.onRegistration();
      this.onCostCentre();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFixedCostTransfer(this.organization)
        .then((mNm: any) => {
          this.fixedCostTransfs = mNm;
          this.onRegistrationLeft();
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
        mNm.forEach((elm) => {
          this.fixedCostTransfs.forEach((obj) => {
            if (obj.ItemGuid == elm.ItemGuid) {
              obj.Item = elm.Reg;
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
          this.fixedCostTransfs.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentGuid) {
              obj.CostCent = elm.CostCentName;
            }
          });
        });
      });
  }

  onAdd() {
    this.fixedCostTransf.FixedcostTransGuid = uuidv4();
    this.fixedCostTransf.CaptureName = this.returnedUser.UserFirstName;

    if (this.fixedCostTransf.ItemGuid)
      this.fixedCostTransf.ItemGuid = this.fixedCostTransf.ItemGuid['ItemGuid'];
    if (this.fixedCostTransf.CostCentGuid)
      this.fixedCostTransf.CostCentGuid =
        this.fixedCostTransf.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_FixedCosts',
        Object.assign({}, this.fixedCostTransf),
        this.fixedCostTransf.FixedcostTransGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fixedCostTransf = new FixedCostTransfer();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.ItemGuid = {
      ItemGuid: item.ItemGuid,
      Reg: item.Item,
    };
    item.CostCentGuid = {
      CostCentGuid: item.CostCentGuid,
      CostCentName: item.CostCent,
    };

    this.fixedCostTransf = item;
    this.editBool = true;
  }

  onModify() {
    if (this.fixedCostTransf.ItemGuid)
      if (this.fixedCostTransf.ItemGuid['ItemGuid'])
        this.fixedCostTransf.ItemGuid =
          this.fixedCostTransf.ItemGuid['ItemGuid'];
    if (this.fixedCostTransf.CostCentGuid)
      if (this.fixedCostTransf.CostCentGuid['CostCentGuid'])
        this.fixedCostTransf.CostCentGuid =
          this.fixedCostTransf.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_FixedCosts',
        Object.assign({}, this.fixedCostTransf),
        this.fixedCostTransf.FixedcostTransGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fixedCostTransf = new FixedCostTransfer();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
