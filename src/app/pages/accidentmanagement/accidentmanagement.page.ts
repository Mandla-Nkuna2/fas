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
  currentDate = new Date();

  agent: any[];
  lossType: any[];
  reportedBy: any[];
  driver: any[];
  yesNo = ['Y', 'N'];
  registration: any[];
  lossCntrlAction: any[];
  returnedUser: any;

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
    this.getCurrentUser();
  }

  onAgent() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.agent = mNm;
    });
  }
  onAgentLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.agent = mNm;
    });
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registration = mNm;
      });
  }

  onLossType() {
    this.firebaseGetServ.getLossType(this.organization).then((mNm: any) => {
      this.lossType = mNm;
    });
  }

  onReportedBy() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }
  onReportedByLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }

  onDriverName() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.driver = mNm;
    });
  }
  onDriverNameLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.driver = mNm;
    });
  }

  onActionTaken() {
    this.firebaseGetServ.getLossCntrlAct(this.organization).then((mNm: any) => {
      this.lossCntrlAction = mNm;
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

      this.onAgent();
      this.onRegistration();
      this.onLossType();
      this.onReportedBy();
      this.onDriverName();
      this.onActionTaken();
    });
  }

  onAdd() {
    this.accidentManagement.LossContGuid = uuidv4();
    this.accidentManagement.Capturename = this.returnedUser.UserFirstName;

    if (this.accidentManagement.Agentguid)
      this.accidentManagement.Agentguid =
        this.accidentManagement.Agentguid['StaffGuid'];
    if (this.accidentManagement.Itemguid)
      this.accidentManagement.Itemguid =
        this.accidentManagement.Itemguid['ItemGuid'];
    if (this.accidentManagement.LossTypeguid)
      this.accidentManagement.LossTypeguid =
        this.accidentManagement.LossTypeguid['LossContTypeguid'];
    if (this.accidentManagement.Reportbyguid)
      this.accidentManagement.Reportbyguid =
        this.accidentManagement.Reportbyguid['StaffGuid'];
    if (this.accidentManagement.DriverGuid)
      this.accidentManagement.DriverGuid =
        this.accidentManagement.DriverGuid['StaffGuid'];
    if (this.accidentManagement.LossContActguid)
      this.accidentManagement.LossContActguid =
        this.accidentManagement.LossContActguid['LossContActGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_LossControl',
        Object.assign({}, this.accidentManagement),
        this.accidentManagement.LossContGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.accidentManagement = new AccidentManagement();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
