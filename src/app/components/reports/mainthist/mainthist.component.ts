import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-mainthist',
  templateUrl: './mainthist.component.html',
  styleUrls: ['./mainthist.component.scss'],
})
export class MainthistComponent implements OnInit {
  organization = 'InnTee';
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  registration: any;
  registrations: any[];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
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

      this.onRegistration();
    });
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registrations = mNm;
      });
  }
}
