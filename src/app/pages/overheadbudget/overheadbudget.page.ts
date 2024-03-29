import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import OverheadBudget from 'src/app/models/supportdata/OverheadBudget.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-overheadbudget',
  templateUrl: './overheadbudget.page.html',
  styleUrls: ['./overheadbudget.page.scss'],
})
export class OverheadbudgetPage implements OnInit {
  organization = 'InnTee';
  oheadbudget: OverheadBudget;
  oheadbudgets: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  ohTypes: any[];
  finYear = ['2020', '2021', '2022', '2023'];
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.oheadbudget = new OverheadBudget();
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
        .getOverheadBudget(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.oheadbudgets = mNm;
          this.onOhbType();
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
        .getOverheadBudgetNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.oheadbudgets = mNm;
          this.onOhbType();
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
        .getOverheadBudgetPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.oheadbudgets = mNm;
          this.onOhbType();
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
        .getOverheadBudgetLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.oheadbudgets = mNm;
          this.onOhbType();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onOhbType() {
    this.firebaseGetServ.getOverheadType(this.organization).then((mNm: any) => {
      this.ohTypes = mNm;

      mNm.forEach((elm) => {
        this.oheadbudgets.forEach((obj) => {
          if (elm.OverheadTypeGuid == obj.OverheadTypeGuid) {
            obj.OverheadType = elm.OverheadType;
          }
        });
      });
    });
  }

  onAdd() {
    this.oheadbudget.OverheadBudGuid = uuidv4();
    this.oheadbudget.captureName = this.returnedUser.UserFirstName;

    if (this.oheadbudget.OverheadTypeGuid)
      this.oheadbudget.OverheadTypeGuid =
        this.oheadbudget.OverheadTypeGuid['OverheadTypeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OverheadBud',
        Object.assign({}, this.oheadbudget),
        this.oheadbudget.OverheadBudGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oheadbudget = new OverheadBudget();
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

    this.oheadbudget = item;
    this.editBool = true;
  }

  onModify() {
    if (this.oheadbudget.OverheadTypeGuid)
      if (this.oheadbudget.OverheadTypeGuid['OverheadTypeGuid'])
        this.oheadbudget.OverheadTypeGuid =
          this.oheadbudget.OverheadTypeGuid['OverheadTypeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OverheadBud',
        Object.assign({}, this.oheadbudget),
        this.oheadbudget.OverheadBudGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.oheadbudget = new OverheadBudget();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
