import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffproreport',
  templateUrl: './staffproreport.page.html',
  styleUrls: ['./staffproreport.page.scss'],
})
export class StaffproreportPage implements OnInit {
  organization = 'InnTee';
  staffproreports: any[] = [];

  returnedUser: any;
  currentDate = new Date();
  staffCodes: any[];
  tblNext = true;
  tblPrev = true;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {}

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
        .getStaffProReport(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.staffproreports = mNm;
          this.onStaffLeft();
          this.onTotal();
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
        .getStaffProReportNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.staffproreports = mNm;
          this.onStaffLeft();
          this.onTotal();
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
        .getStaffProReportPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.staffproreports = mNm;
          this.onStaffLeft();
          this.onTotal();
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
        .getStaffProReportLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.staffproreports = mNm;
          this.onStaffLeft();
          this.onTotal();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.staffCodes = mNm;

      mNm.forEach((elm) => {
        this.staffproreports.forEach((obj) => {
          if (elm.StaffGuid == obj.StaffGuid) obj.staffCode = elm.StaffCode;
        });
      });
    });
  }

  onTotal() {
    this.staffproreports.forEach((obj) => {
      obj.ttlHrs = '';
      if (obj.Productive && obj.Overtime)
        obj.ttlHrs = obj.Productive && obj.Overtime;

      obj.ttlPossHrs = '';
      if (
        obj.Travel &&
        obj.Sick_leave &&
        obj.Leave &&
        obj.OTTravel1 &&
        obj.OTTravel2
      )
        obj.ttlPossHrs =
          obj.Travel +
          obj.Sick_leave +
          obj.Leave +
          obj.OTTravel1 +
          obj.OTTravel2;

      obj.prod = '';
      if (obj.Productive && obj.Non_Productive)
        obj.prod =
          ((obj.Productive - obj.Non_Productive) / obj.Productive) * 100;

      obj.prod_trv = '';
      obj.ttl = '';
      if (
        obj.Productive &&
        obj.Non_Productive &&
        obj.Travel &&
        obj.OTTravel1 &&
        obj.OTTravel2
      ) {
        obj.prod_trv =
          ((obj.Productive -
            obj.Non_Productive +
            obj.Travel +
            obj.OTTravel1 +
            obj.OTTravel2) /
            (obj.Productive + obj.Travel + obj.OTTravel1 + obj.OTTravel2)) *
          100;

        obj.ttl =
          (((obj.Productive - obj.Non_Productive) / obj.Productive) * 100 +
            ((obj.Productive -
              obj.Non_Productive +
              obj.Travel +
              obj.OTTravel1 +
              obj.OTTravel2) /
              (obj.Productive + obj.Travel + obj.OTTravel1 + obj.OTTravel2)) *
              100) /
          2;
      }
    });
  }
}
