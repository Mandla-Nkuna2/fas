import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import StaffTimesheet from 'src/app/models/capture/StaffTimesheet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-stafftimesheets',
  templateUrl: './stafftimesheets.page.html',
  styleUrls: ['./stafftimesheets.page.scss'],
})
export class StafftimesheetsPage implements OnInit {
  organization = 'InnTee';
  staffTimesheet: StaffTimesheet;
  staffTimesheets: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  staffMember: any[];
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.staffTimesheet = new StaffTimesheet();
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
        .getStaffTimesheets(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.staffTimesheets = mNm;
          this.onDailyTot();
          this.onStaffRate();
          this.onStaffMemberLeft();
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
        .getStaffTimesheetsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.staffTimesheets = mNm;
          this.onDailyTot();
          this.onStaffRate();
          this.onStaffMemberLeft();
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
        .getStaffTimesheetsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.staffTimesheets = mNm;
          this.onDailyTot();
          this.onStaffRate();
          this.onStaffMemberLeft();
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
        .getStaffTimesheetsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.staffTimesheets = mNm;
          this.onDailyTot();
          this.onStaffRate();
          this.onStaffMemberLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffRate() {
    this.firebaseGetServ
      .getStaffRateLeft(this.organization)
      .then((mNm: any) => {
        this.staffMember = mNm;

        mNm.forEach((elm) => {
          this.staffTimesheets.forEach((obj) => {
            if (elm.StaffGuid == obj.StaffGuid) {
              obj.rate = elm.StaffRate;
            }
          });
        });
      });
  }

  goRevenue() {
    this.navCtrl.navigateForward('revenue');
  }

  onStaffMemberLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.staffMember = mNm;

      mNm.forEach((elm) => {
        this.staffTimesheets.forEach((obj) => {
          if (elm.StaffGuid == obj.StaffGuid) {
            obj.Staff = elm.StaffCode;
          }
        });
      });
    });
  }

  onDailyTot() {
    this.staffTimesheets.forEach((elm) => {
      if (elm.OTTravel1) {
        elm.OTTravel1 = +elm.OTTravel1;
        elm.dailyTot = elm.OTTravel1;
      }
      if (elm.OTTravel2) {
        elm.OTTravel2 = +elm.OTTravel2;
        elm.dailyTot = elm.OTTravel2;
      }
      if (elm.OTTravel1 && elm.OTTravel2)
        elm.dailyTot = elm.OTTravel1 + elm.OTTravel2;
    });
  }

  onAdd() {
    this.staffTimesheet.Staff_TrnGuid = uuidv4();
    this.staffTimesheet.CaptureName = this.returnedUser.UserFirstName;

    if (this.staffTimesheet.StaffGuid)
      this.staffTimesheet.StaffGuid =
        this.staffTimesheet.StaffGuid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_StaffTime',
        Object.assign({}, this.staffTimesheet),
        this.staffTimesheet.Staff_TrnGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.staffTimesheet = new StaffTimesheet();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.StaffGuid = {
      StaffGuid: item.StaffGuid,
      StaffCode: item.Staff,
    };

    this.staffTimesheet = item;
    this.editBool = true;
  }

  onModify() {
    if (this.staffTimesheet.StaffGuid)
      if (this.staffTimesheet.StaffGuid['StaffGuid'])
        this.staffTimesheet.StaffGuid =
          this.staffTimesheet.StaffGuid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_StaffTime',
        Object.assign({}, this.staffTimesheet),
        this.staffTimesheet.Staff_TrnGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.staffTimesheet = new StaffTimesheet();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
