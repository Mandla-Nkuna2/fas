import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import CostCentre from 'src/app/models/supportdata/CostCentre.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-costcentre',
  templateUrl: './costcentre.page.html',
  styleUrls: ['./costcentre.page.scss'],
})
export class CostcentrePage implements OnInit {
  costcentre: CostCentre;
  costcentres: CostCentre[] = [];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.costcentre = new CostCentre();
  }

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getCostcentre()
        .then((mNm: any) => {
          this.costcentres = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onAdd() {
    this.costcentre.CostCentGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
        'Sup_CostCentre',
        Object.assign({}, this.costcentre),
        this.costcentre.CostCentGuid,
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
