import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-jobcardreg',
  templateUrl: './jobcardreg.component.html',
  styleUrls: ['./jobcardreg.component.scss'],
})
export class JobcardregComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  locOrReg: any;

  location: any;
  locations: any[];

  jobCardNo: any;
  jobCardNos: any[];

  sortOption: any;
  sortOptions = [
    'Add cost description',
    'Cost centre',
    'Location',
    'Registration',
  ];

  registration: any;
  registrations: any[];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onLocation();
    this.onJobCardNo();
    this.onRegistration();
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

  onJobCardNo() {
    this.firebaseGetServ.getJobCardNos().then((mNm: any) => {
      this.jobCardNos = mNm;
    });
  }
  onJobCardNoLeft() {
    this.firebaseGetServ.getJobCardNosLeft().then((mNm: any) => {
      this.jobCardNos = mNm;
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
}
