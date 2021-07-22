import { Component, OnInit } from '@angular/core';
import OilType from 'src/app/models/supportdata/OilType.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-oiltype',
  templateUrl: './oiltype.page.html',
  styleUrls: ['./oiltype.page.scss'],
})
export class OiltypePage implements OnInit {
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
  ) {
    this.oilType = new OilType();
  }

  ngOnInit() {
    this.onTableRep();
    this.onOilMake();
    this.onOilGrade();
    this.onOilClass();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getOiltypes()
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
    this.firebaseGetServ.getOilMake().then((mNm: any) => {
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
    this.firebaseGetServ.getOilGrade().then((mNm: any) => {
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
    this.firebaseGetServ.getOilClass().then((mNm: any) => {
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
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
