import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffdailyschedule',
  templateUrl: './staffdailyschedule.component.html',
  styleUrls: ['./staffdailyschedule.component.scss'],
})
export class StaffdailyscheduleComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  staffCat: any;
  staffCats: any[];

  staffCode: any;
  staffCodes: any[];

  sortOption: any;
  sortOptions = [
    'Add cost description',
    'Cost centre',
    'Location',
    'Registration',
  ];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onStaffCat();
    // this.onStaffCodes();
  }

  onStaffCat() {}

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
}
