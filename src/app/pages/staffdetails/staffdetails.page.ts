import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import Staff from 'src/app/models/supportdata/StaffDetails.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-staffdetails',
  templateUrl: './staffdetails.page.html',
  styleUrls: ['./staffdetails.page.scss'],
})
export class StaffdetailsPage implements OnInit {
  organization = 'InnTee';
  staff: Staff;
  staffs: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  staffCats: any[];
  addLicView = false;
  licCodes = ['A', 'A1', 'B', 'C', 'C1', 'EB', 'EC', 'EC1'];
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.staff = new Staff();
  }

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

      this.onTableRep();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffDetails(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.staffs = mNm;
          this.onStaffCatLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffDetailsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.staffs = mNm;
          this.onStaffCatLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffDetailsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.staffs = mNm;
          this.onStaffCatLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffDetailsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.staffs = mNm;
          this.onStaffCatLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onStaffCatLeft() {
    this.firebaseGetServ
      .getStaffCategoryLeft(this.organization)
      .then((mNm: any) => {
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
    this.staff.StaffGuid = uuidv4();
    this.staff.CaptureName = this.returnedUser.UserFirstName;

    if (this.staff.StaffCatgGuid)
      this.staff.StaffCatgGuid = this.staff.StaffCatgGuid['StaffCatgGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_StaffDetails',
        Object.assign({}, this.staff),
        this.staff.StaffGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.staff = new Staff();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.StaffCatgGuid = {
      StaffCatgGuid: item.StaffCatgGuid,
      StaffCatg: item.StaffCatg,
    };

    this.staff = item;
    this.editBool = true;
  }

  onModify() {
    if (this.staff.StaffCatgGuid)
      if (this.staff.StaffCatgGuid['StaffCatgGuid'])
        this.staff.StaffCatgGuid = this.staff.StaffCatgGuid['StaffCatgGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_StaffDetails',
        Object.assign({}, this.staff),
        this.staff.StaffGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.staff = new Staff();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
