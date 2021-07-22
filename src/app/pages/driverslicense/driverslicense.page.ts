import Staff from 'src/app/models/supportdata/StaffDetails.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-driverslicense',
  templateUrl: './driverslicense.page.html',
  styleUrls: ['./driverslicense.page.scss'],
})
export class DriverslicensePage implements OnInit {
  staff: any[] = [];

  staffCats: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaff()
        .then((mNm: any) => {
          this.staff = mNm;
          this.onStaffCategory();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffCategory() {
    this.firebaseGetServ.getStaffCategoryLeft().then((mNm: any) => {
      this.staffCats = mNm;

      mNm.forEach((elm) => {
        this.staff.forEach((obj) => {
          if (elm.StaffCatgGuid == obj.StaffCatgGuid) {
            obj.StaffCatg = elm.StaffCatg;
          }
        });
      });
    });
  }
}
