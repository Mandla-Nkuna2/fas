import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-losscontrlisting',
  templateUrl: './losscontrlisting.component.html',
  styleUrls: ['./losscontrlisting.component.scss'],
})
export class LosscontrlistingComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  locOrReg: any;

  location: any;
  locations: any[];

  lossContType: any;
  lossContTypes: any[];

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

  lossContAct: any;
  lossContActs: any[];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onLocation();
    // this.onStaffCodes();
    // this.onRegistration();
  }

  onLocation() {
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.locations = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.locations = mNm;
    });
  }

  onLossContType() {}

  onStaffCodes() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCodes = mNm;
    });
  }
  onStaffCodesLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.staffCodes = mNm;
    });
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registrations = mNm;
    });
  }

  onLossContAct() {}
}
