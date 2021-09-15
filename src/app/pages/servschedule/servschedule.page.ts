import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import ServiceSchTask from 'src/app/models/supportdata/ServiceSchTask.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
@Component({
  selector: 'app-servschedule',
  templateUrl: './servschedule.page.html',
  styleUrls: ['./servschedule.page.scss'],
})
export class ServschedulePage implements OnInit {
  organization = 'InnTee';
  servschedule: ServiceSchTask;
  servschedules: ServiceSchTask[] = [];

  currentDate = new Date();
  itemMakModels: any[];
  serviceTypes: any[];
  itemMakModel: any;
  serviceType: any;
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.servschedule = new ServiceSchTask();
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
      this.onServiceType();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasks(this.organization)
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

  onMakModelLeft() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          elm.makeModel = elm.ItemMake;
          if (elm.ItemModel) elm.makeModel += ' ' + elm.ItemModel;
        });
        this.itemMakModels = mNm;
      });
  }

  onServiceType() {
    this.firebaseGetServ.getServiceType(this.organization).then((mNm: any) => {
      this.serviceTypes = mNm;
    });
  }
}
