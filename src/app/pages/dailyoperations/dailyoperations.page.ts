import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import DailyOperationRec from 'src/app/models/capture/DailyOperationRec.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';

@Component({
  selector: 'app-dailyoperations',
  templateUrl: './dailyoperations.page.html',
  styleUrls: ['./dailyoperations.page.scss'],
})
export class DailyoperationsPage implements OnInit {
  dailyOpRec: DailyOperationRec;
  dailyOpRecs: DailyOperationRec[] = [];

  registrations: any[];
  costCentre: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.dailyOpRec = new DailyOperationRec();
  }

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getDailyOperations()
        .then((mNm: any) => {
          this.dailyOpRecs = mNm;
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

  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registrations = mNm;

      mNm.forEach((elm) => {
        this.dailyOpRecs.forEach((obj) => {
          if (elm.ItemGuid == obj.Itemguid) {
            obj.Itemguid = elm.Reg;
          }
        });
      });
    });
  }

  onCostCentreLeft() {
    this.firebaseGetServ.getCostCentreLeft().then((mNm: any) => {
      this.costCentre = mNm;

      mNm.forEach((elm) => {
        this.dailyOpRecs.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentreguid) {
            obj.CostCentreguid = elm.CostCentName;
          }
        });
      });
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_PlantSheets',
        this.dailyOpRec,
        this.dailyOpRec.Itemguid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
