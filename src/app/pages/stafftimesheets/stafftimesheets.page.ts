import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import StaffTimesheet from 'src/app/models/capture/StaffTimesheet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-stafftimesheets',
  templateUrl: './stafftimesheets.page.html',
  styleUrls: ['./stafftimesheets.page.scss'],
})
export class StafftimesheetsPage implements OnInit {
  staffTimesheet: StaffTimesheet;
  staffTimesheets: any[] = [];

  staffMember: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.staffTimesheet = new StaffTimesheet();
  }

  ngOnInit() {
    this.onTableRep();
    this.onStaffMember();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffTimesheets()
        .then((mNm: any) => {
          this.staffTimesheets = mNm;
          this.onStaffRate();
          this.onStaffMemberLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffRate() {
    this.firebaseGetServ.getStaffRateLeft().then((mNm: any) => {
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

  onStaffMember() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffMember = mNm;
    });
  }
  onStaffMemberLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_StaffTime',
        Object.assign({}, this.staffTimesheet),
        this.staffTimesheet.Staff_TrnGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
