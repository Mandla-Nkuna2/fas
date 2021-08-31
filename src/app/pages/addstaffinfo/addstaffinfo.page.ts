import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import StaffCategory from 'src/app/models/capture/StaffCategory.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addstaffinfo',
  templateUrl: './addstaffinfo.page.html',
  styleUrls: ['./addstaffinfo.page.scss'],
})
export class AddstaffinfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  staffCat: StaffCategory;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.staffCat = new StaffCategory();
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
    });
  }

  onAddStaffCat() {
    this.staffCat.StaffCatgGuid = uuidv4();
    this.staffCat.CapName = this.returnedUser.UserFirstName;
    this.staffCat.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_StaffCategory',
        Object.assign({}, this.staffCat),
        this.staffCat.StaffCatgGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.staffCat = new StaffCategory();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
