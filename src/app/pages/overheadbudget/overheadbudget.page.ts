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

  ohTypes: any[];
  finYear = ['2020', '2021', '2022', '2023'];

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
    this.getCurentUser();
    this.onTableRep();
    this.onOhbType();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOverheadBudget()
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
    this.firebaseGetServ.getOverheadType().then((mNm: any) => {
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

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.oheadbudget.OverheadBudGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_OverheadBud',
        Object.assign({}, this.oheadbudget),
        this.oheadbudget.OverheadBudGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
