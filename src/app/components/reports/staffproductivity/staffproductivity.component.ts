import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffproductivity',
  templateUrl: './staffproductivity.component.html',
  styleUrls: ['./staffproductivity.component.scss'],
})
export class StaffproductivityComponent implements OnInit {
  organization = 'InnTee';
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

      this.onStaffCat();
      this.onStaffCodes();
    });
  }

  onStaffCat() {
    this.firebaseGetServ
      .getStaffCategory(this.organization)
      .then((mNm: any) => {
        this.staffCats = mNm;
      });
  }
  onStaffCatLeft() {
    this.firebaseGetServ
      .getStaffCategoryLeft(this.organization)
      .then((mNm: any) => {
        this.staffCats = mNm;
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
}
