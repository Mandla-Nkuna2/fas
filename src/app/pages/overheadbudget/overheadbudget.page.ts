import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import OverheadBudget from 'src/app/models/supportdata/OverheadBudget.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-overheadbudget',
  templateUrl: './overheadbudget.page.html',
  styleUrls: ['./overheadbudget.page.scss'],
})
export class OverheadbudgetPage implements OnInit {
  oheadbudget: OverheadBudget;
  oheadbudgets: any[] = [];

  ohTypes: any[];
  finYear = ['2020', '2021', '2022', '2023'];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oheadbudget = new OverheadBudget();
  }

  ngOnInit() {
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

  onAdd() {
    this.oheadbudget.OverheadBudGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
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
