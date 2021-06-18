import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffproductivity',
  templateUrl: './staffproductivity.component.html',
  styleUrls: ['./staffproductivity.component.scss'],
})
export class StaffproductivityComponent implements OnInit {
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

  dateFrom: any;

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onStaffCat();
    // this.onStaffCodes();
  }

  onStaffCat() {
    this.firebaseGetServ.getStaffCategory().then((mNm: any) => {
      this.staffCats = mNm;
    });
  }
  onStaffCatLeft() {
    this.firebaseGetServ.getStaffCategoryLeft().then((mNm: any) => {
      this.staffCats = mNm;
    });
  }

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
