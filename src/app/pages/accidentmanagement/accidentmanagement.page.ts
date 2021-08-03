import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { AccidentManagement } from './../../models/capture/AccidentManagement.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { v4 as uuidv4 } from 'uuid';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-accidentmanagement',
  templateUrl: './accidentmanagement.page.html',
  styleUrls: ['./accidentmanagement.page.scss'],
})
export class AccidentmanagementPage implements OnInit {
  organization = 'InnTee';

  accidentManagement: AccidentManagement;

  agent: any[];
  lossType: any[];
  reportedBy: any[];
  driver: any[];
  yesNo = ['Y', 'N'];
  registration: any[];
  lossCntrlAction: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.accidentManagement = new AccidentManagement();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onAgent();
    this.onRegistration();
    this.onLossType();
    this.onReportedBy();
    this.onDriverName();
    this.onActionTaken();
  }

  onAgent() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.agent = mNm;
    });
  }
  onAgentLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.agent = mNm;
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
    });
  }

  onLossType() {
    this.firebaseGetServ.getLossType().then((mNm: any) => {
      this.lossType = mNm;
    });
  }

  onReportedBy() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }
  onReportedByLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }

  onDriverName() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.driver = mNm;
    });
  }
  onDriverNameLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.driver = mNm;
    });
  }

  onActionTaken() {
    this.firebaseGetServ.getLossCntrlAct().then((mNm: any) => {
      this.lossCntrlAction = mNm;
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
    this.accidentManagement.LossContGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_LossControl',
        Object.assign({}, this.accidentManagement),
        this.accidentManagement.LossContGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
