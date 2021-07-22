import { Component, OnInit } from '@angular/core';
import Staff from 'src/app/models/supportdata/StaffDetails.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.page.html',
  styleUrls: ['./staffdetails.page.scss'],
})
export class StaffdetailsPage implements OnInit {
  staff: Staff;
  staffs: any[] = [];

  staffCats: any[];
  addLicView = false;
  licCodes = ['A', 'A1', 'B', 'C', 'C1', 'EB', 'EC', 'EC1'];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.staff = new Staff();
  }

  ngOnInit() {
    this.onTableRep();
    this.onStaffCat();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffDetails()
        .then((mNm: any) => {
          this.staffs = mNm;
          this.onStaffCatLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffCat() {
    this.firebaseGetServ.getStaffCategory().then((mNm: any) => {
      this.staffCats = mNm;
    });
  }
  onStaffCatLeft() {
    this.firebaseGetServ.getStaffCategoryLeft().then((mNm: any) => {
      this.staffCats = mNm;

      mNm.forEach((elm) => {
        this.staffs.forEach((obj) => {
          if (elm.StaffCatgGuid == obj.StaffCatgGuid) {
            obj.StaffCatg = elm.StaffCatg;
          }
        });
      });
    });
  }

  onAddLicView() {
    this.addLicView = !this.addLicView;
  }

  onAddLic() {}

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_StaffDetails',
        Object.assign({}, this.staff),
        this.staff.StaffGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
