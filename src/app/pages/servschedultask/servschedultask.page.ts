import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import ServiceSchTask from 'src/app/models/supportdata/ServiceSchTask.model';
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
  serviceSchTask: ServiceSchTask;
  serviceSchTasks: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  servSchTaskDesc: any;
  yesNo = ['Y', 'N'];
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.serviceSchTask = new ServiceSchTask();
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

      this.onTableRep();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasks(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.serviceSchTasks = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasksNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.serviceSchTasks = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasksPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.serviceSchTasks = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasksLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.serviceSchTasks = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onAdd() {
    this.serviceSchTask.CheckListItemGuid = uuidv4();
    this.serviceSchTask.CapName = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_Checklist',
        Object.assign({}, this.serviceSchTask),
        this.serviceSchTask.CheckListItemGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.serviceSchTask = new ServiceSchTask();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    this.serviceSchTask = item;
    this.editBool = true;
  }

  onModify() {
    this.firebaseService
      .writeData(
        this.organization,
        'Sup_Checklist',
        Object.assign({}, this.serviceSchTask),
        this.serviceSchTask.CheckListItemGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.serviceSchTask = new ServiceSchTask();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
