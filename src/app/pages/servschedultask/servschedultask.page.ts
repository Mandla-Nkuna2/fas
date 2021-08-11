import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import ServiceTask from 'src/app/models/supportdata/ServiceTask.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-servschedultask',
  templateUrl: './servschedultask.page.html',
  styleUrls: ['./servschedultask.page.scss'],
})
export class ServschedultaskPage implements OnInit {
  organization = 'InnTee';
  serviceSchTask: ServiceTask;
  serviceSchTasks: any[] = [];

  currentDate = new Date();
  servSchTaskDesc: any;
  maintEvents: any[];
  jobcards: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.serviceSchTask = new ServiceTask();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasks(this.organization)
        .then((mNm: any) => {
          this.serviceSchTasks = mNm;
          this.onJobcard();
          this.onMaintEvent();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onJobcard() {
    this.firebaseRepServ
      .getJobcardsLeft(this.organization)
      .then((staff: any) => {
        this.jobcards = staff;

        staff.forEach((elm) => {
          this.serviceSchTasks.forEach((obj) => {
            if (elm.JobCardGuid == obj.JobcardGuid) {
              obj.Jobcard = elm.Defects;
            }
          });
        });
      });
  }

  onMaintEvent() {
    this.firebaseRepServ
      .getMaintEventLeft(this.organization)
      .then((staff: any) => {
        this.maintEvents = staff;

        staff.forEach((elm) => {
          this.serviceSchTasks.forEach((obj) => {
            if (elm.MaintEvntGuid == obj.MaintEvntGuid) {
              obj.MaintEvnt = elm.Workdone;
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

      this.onTableRep();
    });
  }

  onAdd() {
    this.serviceSchTask.ServHistGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_ServScheduleHistory',
        Object.assign({}, this.serviceSchTask),
        this.serviceSchTask.ServHistGuid,
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
