import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-servicedetinquiry',
  templateUrl: './servicedetinquiry.component.html',
  styleUrls: ['./servicedetinquiry.component.scss'],
})
export class ServicedetinquiryComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  task: any;
  tasks = [
    'ALL TASKS',
    'COMPLETED TASKS',
    'DONT DISPLAY',
    'FAULTS',
    'NO DETAIL REQUIRED',
  ];

  registration: any;
  registrations: any[];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onRegistration();
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
