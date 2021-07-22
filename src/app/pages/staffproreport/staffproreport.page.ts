import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffproreport',
  templateUrl: './staffproreport.page.html',
  styleUrls: ['./staffproreport.page.scss'],
})
export class StaffproreportPage implements OnInit {
  staffproreports: any[] = [];

  staffCodes: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffProReport()
        .then((mNm: any) => {
          this.staffproreports = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffLeft() {
    this.firebaseGetServ.getStaffLeft().then((staff: any) => {
      this.staffCodes = staff;

      staff.forEach((elm) => {
        this.staffproreports.forEach((obj) => {
          if (elm.StaffGuid == obj.StaffGuid) {
            obj.StaffGuid = elm.StaffCode;
          }
        });
      });
    });
  }

  isNumber(value) {
    let isNum = true;
    if (Number.isNaN(value)) {
    } else {
      isNum = false;
    }

    if (!Number.isFinite(value)) {
      isNum = true;
    }
    return isNum;
  }

  // isNumber(value) {
  //   let isNum = true;

  //   if (Number.isNaN(value)) {
  //     isNum = true;
  //   } else {
  //   }

  //   if (
  //     value == Number.POSITIVE_INFINITY ||
  //     value == Number.NEGATIVE_INFINITY
  //   ) {
  //     isNum = true;
  //   }

  //   return Number.isNaN(value);
  // }
}
