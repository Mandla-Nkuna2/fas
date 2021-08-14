import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-firstautoytd',
  templateUrl: './firstautoytd.component.html',
  styleUrls: ['./firstautoytd.component.scss'],
})
export class FirstautoytdComponent implements OnInit {
  organization = 'InnTee';
  dateFrom: any;

  location: any;
  locations: any[];

  level: any;
  levels = ['0', '1', '2', '3', '4'];
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

      this.onLocation();
    });
  }

  onLocation() {
    this.firebaseGetServ.getLocation(this.organization).then((mNm: any) => {
      this.locations = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      this.locations = mNm;
    });
  }
}
