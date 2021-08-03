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

  staffCats: any[];
  addLicView = false;
  licCodes = ['A', 'A1', 'B', 'C', 'C1', 'EB', 'EC', 'EC1'];

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
    this.getCurentUser();
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

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.staff.StaffGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
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
