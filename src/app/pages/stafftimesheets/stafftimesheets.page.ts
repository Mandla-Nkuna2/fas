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

  staffMember: any[];

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

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffTimesheets(this.organization)
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

  onStaffMember() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.staffMember = mNm;
    });
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
      this.onStaffMember();
    });
  }

  onAdd() {
    this.staffTimesheet.Staff_TrnGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
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
