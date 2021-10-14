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
  userGroups: UserGroup[] = [];

  returnedUser: any;
  currentDate = new Date();
  tblNext = true;
  tblPrev = true;

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
        .getUserGroups(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.userGroups = mNm;
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
        .getUserGroupsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.userGroups = mNm;
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
        .getUserGroupsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.userGroups = mNm;
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
        .getUserGroupsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.userGroups = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
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
