import UserGroup from 'src/app/models/systemmanagement/UserGroup.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.page.html',
  styleUrls: ['./usergroups.page.scss'],
})
export class UsergroupsPage implements OnInit {
  organization = 'InnTee';
  userGroup: UserGroup;
  userGroups: UserGroup[];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.userGroup = new UserGroup();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onUserGroups() {
    this.firebaseGetServ.getUserGroup(this.organization).then((mNm: any) => {
      this.userGroups = mNm;
    });
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

      this.onUserGroups();
    });
  }

  onAdd() {
    this.userGroup.UserGroupGuid = uuidv4();
    this.userGroup.Active = 'Y';
    this.userGroup.captureName = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Sys_UserGroup',
        Object.assign({}, this.userGroup),
        this.userGroup.UserGroupGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.userGroup = new UserGroup();
      })
      .catch((err) => {
        console.log('hit error!');
        this.popUp.showError(err.message);
      });
  }

  onModify() {}
  onDeActivate() {}
  onClear() {}
}
