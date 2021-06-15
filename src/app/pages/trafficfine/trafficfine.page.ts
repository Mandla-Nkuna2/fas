import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Trafficfine } from './../../models/capture/Trafficfine.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';

@Component({
  selector: 'app-trafficfine',
  templateUrl: './trafficfine.page.html',
  styleUrls: ['./trafficfine.page.scss'],
})
export class TrafficfinePage implements OnInit {
  trafficfine: Trafficfine;

  supervisor: any[];
  registration: any[];
  driver: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.trafficfine = new Trafficfine();
  }

  ngOnInit() {
    // this.onSupervisor()
    // this.onRegistration()
    // this.onDriver();
  }

  onSupervisor() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.supervisor = mNm;
    });
  }
  onSupervisorLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.supervisor = mNm;
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

  onDriver() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.driver = mNm;
    });
  }
  onDriverLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.driver = mNm;
    });
  }

  onMarkAsComplete() {
    this.firebaseService
      .writeData(
        'myTest',
        Object.assign({}, this.trafficfine),
        this.trafficfine.TrafficFineGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
