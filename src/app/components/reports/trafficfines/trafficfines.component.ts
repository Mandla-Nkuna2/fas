import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-trafficfines',
  templateUrl: './trafficfines.component.html',
  styleUrls: ['./trafficfines.component.scss'],
})
export class TrafficfinesComponent implements OnInit {
  organization = 'InnTee';
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  locOrReg: any;

  location: any;
  locations: any[];

  itemType: any;
  itemTypes: any[];

  staffCode: any;
  staffCodes: any[];

  sortOption: any;
  sortOptions = [
    'Add cost description',
    'Cost centre',
    'Location',
    'Registration',
  ];

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

      this.onLocation();
      this.onItemType();
      this.onStaffCodes();
      this.onRegistration();
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

  onItemType() {
    this.firebaseGetServ
      .getAssetTypeName(this.organization)
      .then((mNm: any) => {
        this.itemTypes = mNm;
      });
  }
  onItemTypeLeft() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        this.itemTypes = mNm;
      });
  }

  onStaffCodes() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.staffCodes = mNm;
    });
  }
  onStaffCodesLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.staffCodes = mNm;
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
