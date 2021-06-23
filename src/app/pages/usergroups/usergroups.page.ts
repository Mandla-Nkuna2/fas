import UserGroup from 'src/app/models/systemmanagement/UserGroup.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.page.html',
  styleUrls: ['./usergroups.page.scss'],
})
export class UsergroupsPage implements OnInit {
  userGroup: UserGroup;
  userGroups: UserGroup[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.userGroup = new UserGroup();
  }

  ngOnInit() {
    // this.onUserGroups();
  }

  onUserGroups() {
    this.firebaseGetServ.getUserGroup().then((mNm: any) => {
      this.userGroups = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Sys_UserGroup',
        Object.assign({}, this.userGroup),
        this.userGroup.UserGroupGuid,
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
