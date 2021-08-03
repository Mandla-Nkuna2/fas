import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import ServiceSchedule from 'src/app/models/supportdata/ServiceSchedule.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-servschedule',
  templateUrl: './servschedule.page.html',
  styleUrls: ['./servschedule.page.scss'],
})
export class ServschedulePage implements OnInit {
  organization = 'InnTee';
  servschedule: ServiceSchedule;
  servschedules: ServiceSchedule[] = [];

  itemMakModels: any[];
  serviceTypes: any[];
  itemMakModel: any;
  serviceType: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.servschedule = new ServiceSchedule();
  }

  ngOnInit() {
    this.getCurentUser();
    // this.onTableRep();
    this.onMakModel();
    this.onServiceType();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasks()
        .then((mNm: any) => {
          this.servschedules = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onMakModel() {
    this.firebaseGetServ.getAssetMakenModel().then((mNm: any) => {
      this.itemMakModels = mNm;
    });
  }
  onMakModelLeft() {
    this.firebaseGetServ.getAssetMakenModelLeft().then((mNm: any) => {
      this.itemMakModels = mNm;
    });
  }

  onServiceType() {
    this.firebaseGetServ.getServiceType().then((mNm: any) => {
      this.serviceTypes = mNm;
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
    this.servschedule.id = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_ServScheduleHistory',
        Object.assign({}, this.servschedule),
        this.servschedule.id,
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
