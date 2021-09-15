import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffaudittrail',
  templateUrl: './staffaudittrail.page.html',
  styleUrls: ['./staffaudittrail.page.scss'],
})
export class StaffaudittrailPage implements OnInit {
  organization = 'InnTee';
  staffAuditTrails: any[] = [];

  currentDate = new Date();
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
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
        .getStaffAuditTrails(this.organization)
        .then((mNm: any) => {
          this.staffAuditTrails = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
}
