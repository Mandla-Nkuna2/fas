import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import MaintReason from 'src/app/models/capture/MaintReason.model';
import MaintType from 'src/app/models/capture/MaintType.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addmaintinfo',
  templateUrl: './addmaintinfo.page.html',
  styleUrls: ['./addmaintinfo.page.scss'],
})
export class AddmaintinfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  maintType: MaintType;
  maintReason: MaintReason;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.maintType = new MaintType();
    this.maintReason = new MaintReason();
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

  onAddMaintType() {
    this.maintType.MaintTypeGuid = uuidv4();
    this.maintType.Active = 'Y';
    this.maintType.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_MaintType',
        Object.assign({}, this.maintType),
        this.maintType.MaintTypeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.maintType = new MaintType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddMaintReason() {
    this.maintReason.MaintReasonGuid = uuidv4();
    this.maintReason.Active = 'Y';
    this.maintReason.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_MaintReason',
        Object.assign({}, this.maintReason),
        this.maintReason.MaintReasonGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.maintReason = new MaintReason();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
