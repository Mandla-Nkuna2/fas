import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Trafficfine } from './../../models/capture/Trafficfine.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-trafficfine',
  templateUrl: './trafficfine.page.html',
  styleUrls: ['./trafficfine.page.scss'],
})
export class TrafficfinePage implements OnInit {
  organization = 'InnTee';
  trafficfine: Trafficfine;

  returnedUser: any;
  currentDate = new Date();
  supervisor: any[];
  registration: any[];
  driver: any[];
  spvActions: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.trafficfine = new Trafficfine();
  }

  ngOnInit() {
    this.getCurrentUser();
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

      this.onSupervisor();
      this.onSpvAction();
      this.onRegistration();
      this.onDriver();
    });
  }

  onSupervisor() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.supervisor = mNm;
    });
  }
  onSupervisorLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.supervisor = mNm;
    });
  }

  onSpvAction() {
    this.firebaseGetServ.getTraffFineAct(this.organization).then((mNm: any) => {
      this.spvActions = mNm;
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

  onDriver() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.driver = mNm;
    });
  }
  onDriverLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.driver = mNm;
    });
  }

  onAdd() {
    this.trafficfine.TrafficFineGuid = uuidv4();

    if (this.trafficfine.ItemGuid) {
      this.trafficfine.RegIndex = this.trafficfine.ItemGuid['Reg'];
      this.trafficfine.ItemGuid = this.trafficfine.ItemGuid['ItemGuid'];
    }
    if (this.trafficfine.SuperGuid)
      this.trafficfine.SuperGuid = this.trafficfine.SuperGuid['StaffGuid'];
    if (this.trafficfine.SuperAction)
      this.trafficfine.SuperAction =
        this.trafficfine.SuperAction['TrafFineActGuid'];
    if (this.trafficfine.Driverguid)
      this.trafficfine.Driverguid = this.trafficfine.Driverguid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_TrafficFine',
        Object.assign({}, this.trafficfine),
        this.trafficfine.TrafficFineGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.trafficfine = new Trafficfine();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
