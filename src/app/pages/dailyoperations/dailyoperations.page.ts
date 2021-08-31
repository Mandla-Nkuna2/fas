import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import DailyOperationRec from 'src/app/models/capture/DailyOperationRec.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dailyoperations',
  templateUrl: './dailyoperations.page.html',
  styleUrls: ['./dailyoperations.page.scss'],
})
export class DailyoperationsPage implements OnInit {
  organization = 'InnTee';
  dailyOpRec: DailyOperationRec;
  dailyOpRecs: any[] = [];

  registrations: any[];
  currentDate = new Date();
  costCentre: any[];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.dailyOpRec = new DailyOperationRec();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getDailyOperations(this.organization)
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
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registrations = mNm;

        mNm.forEach((elm) => {
          this.dailyOpRecs.forEach((obj) => {
            if (elm.ItemGuid == obj.Itemguid) {
              obj.Item = elm.Reg;
            }
          });
        });
      });
  }

  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
        this.costCentre = mNm;

        mNm.forEach((elm) => {
          this.dailyOpRecs.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentreguid) {
              obj.CostCentre = elm.CostCentName;
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
    });
  }

  onAdd() {
    this.dailyOpRec.Itemguid = uuidv4();
    this.dailyOpRec.CaptureName = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_PlantSheets',
        this.dailyOpRec,
        this.dailyOpRec.Itemguid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.dailyOpRec = new DailyOperationRec();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
