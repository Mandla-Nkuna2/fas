import { Operator } from './../../models/capture/DailyOperationRec.model';
import DailyOperationRec from 'src/app/models/capture/DailyOperationRec.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-dailyoperationrecord',
  templateUrl: './dailyoperationrecord.page.html',
  styleUrls: ['./dailyoperationrecord.page.scss'],
})
export class DailyoperationrecordPage implements OnInit {
  dOpsRec: DailyOperationRec;
  dailyOpRecs: DailyOperationRec[] = [];

  registration: any[];
  location: any[];
  costCentre: any[];
  operator: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.dOpsRec = new DailyOperationRec();
    this.dOpsRec.operator = Object.assign({}, new Operator());
  }

  ngOnInit() {
    this.onTableRep();
    this.onRegistration();
    this.onLocation();
    this.onCostCentre();
    this.onOperatorName();
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

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;

      mNm.forEach((elm) => {
        this.dailyOpRecs.forEach((obj) => {
          if (elm.ItemGuid == obj.Itemguid) {
            obj.Itemguid = elm.Reg;
          }
        });
      });
    });
  }

  onLocation() {
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.location = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.location = mNm;
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
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

  onOperatorName() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.operator = mNm;
    });
  }
  onOperatorNameLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.operator = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_PlantSheets',
        Object.assign({}, this.dOpsRec),
        this.dOpsRec.PlantSheetguid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
