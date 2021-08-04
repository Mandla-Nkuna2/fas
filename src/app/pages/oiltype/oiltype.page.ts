import { Component, OnInit } from '@angular/core';
import OilType from 'src/app/models/supportdata/OilType.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-oiltype',
  templateUrl: './oiltype.page.html',
  styleUrls: ['./oiltype.page.scss'],
})
export class OiltypePage implements OnInit {
  organization = 'InnTee';
  oilType: OilType;
  oilTypes: any[] = [];

  oilMake: any[];
  oilGrade: any[];
  oilClass: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.oilType = new OilType();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOiltypes(this.organization)
        .then((mNm: any) => {
          this.oilTypes = mNm;
          this.onOilMake();
          this.onOilGrade();
          this.onOilClass();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onOilMake() {
    this.firebaseGetServ.getOilMake(this.organization).then((mNm: any) => {
      this.oilMake = mNm;

      mNm.forEach((elm) => {
        this.oilTypes.forEach((obj) => {
          if (elm.OilMakeGuid == obj.OilMakeGuid) {
            obj.oilMake = elm.OilMake;
          }
        });
      });
    });
  }

  onOilGrade() {
    this.firebaseGetServ.getOilGrade(this.organization).then((mNm: any) => {
      this.oilGrade = mNm;

      mNm.forEach((elm) => {
        this.oilTypes.forEach((obj) => {
          if (elm.OilGradeGuid == obj.OilGradeGuid) {
            obj.oilGrade = elm.OilGrade;
          }
        });
      });
    });
  }

  onOilClass() {
    this.firebaseGetServ.getOilClass(this.organization).then((mNm: any) => {
      this.oilClass = mNm;

      mNm.forEach((elm) => {
        this.oilTypes.forEach((obj) => {
          if (elm.OilClassGuid == obj.OilClassGuid) {
            obj.OilClass = elm.OilClass;
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

      this.onTableRep();
      this.onOilMake();
      this.onOilGrade();
      this.onOilClass();
    });
  }

  onAdd() {
    this.oilType.OilGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_Oiltype',
        Object.assign({}, this.oilType),
        this.oilType.OilGuid,
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
