import { Component, OnInit } from '@angular/core';
import ServiceTask from 'src/app/models/supportdata/ServiceTask.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-servschedultask',
  templateUrl: './servschedultask.page.html',
  styleUrls: ['./servschedultask.page.scss'],
})
export class ServschedultaskPage implements OnInit {
  serviceSchTask: ServiceTask;
  serviceSchTasks: any[] = [];

  servSchTaskDesc: any;
  maintEvents: any[];
  jobcards: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.serviceSchTask = new ServiceTask();
  }

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasks()
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
    this.firebaseRepServ.getJobcardsLeft().then((staff: any) => {
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
    this.firebaseRepServ.getMaintEventLeft().then((staff: any) => {
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
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
