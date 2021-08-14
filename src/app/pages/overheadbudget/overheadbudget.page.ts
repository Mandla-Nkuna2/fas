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
  ohTypes: any[];
  finYear = ['2020', '2021', '2022', '2023'];
  returnedUser: any;

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

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOverheadBudget(this.organization)
        .then((mNm: any) => {
          this.oheadbudgets = mNm;
          this.onOhbType();
          this.popUp.dismissLoading();
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
      this.onOhbType();
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
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
