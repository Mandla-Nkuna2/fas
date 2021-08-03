import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/systemmanagement/User.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  organization = 'InnTee';

  user: User;
  users: any[] = [];

  userGroup: any;
  userGroups: any[];
  locations: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onUserGroup();
    this.onLocation();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getUsers()
        .then((mNm: any) => {
          this.users = mNm;
          this.onUserGroup();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onUserGroup() {
    this.firebaseGetServ.getUserGroup().then((mNm: any) => {
      this.userGroups = mNm;

      mNm.forEach((elm) => {
        this.users.forEach((obj) => {
          if (elm.UserGroupGuid == obj.UserGroupGuid) {
            obj.UserGroup = elm.UserGroupTitle;
          }
        });
      });
    });
  }

  onLocation() {
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.locations = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.locations = mNm;
    });
  }

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
      console.log('returned user: ', this.organization);
    });
  }

  registerUser() {
    // this.user = {
    //   UserGuid: uuidv4(),
    //   UserFirstName: '',
    //   UserSurname: '',
    //   UserLogin: '',
    //   UserGroupGuid: '',
    //   UserPassword: '',
    //   Active: 'Y',
    //   CaptureDate: new Date().toString(),
    //   LocUserCode: '',
    //   Capturename: '',
    //   phoneNumber: '',
    //   organization: '',
    // };

    this.user.UserGuid = uuidv4();
    this.user.organization = this.organization;
    return new Promise<any>((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(
          this.user.UserLogin,
          this.user.UserPassword,
        )
        .then((res) => {
          resolve(res);
          console.log('registered');
          // this.addUser();
          this.captureUsers();
        })
        .catch((err) => {
          reject(err.message);
          this.popUp.showAlert('Failed', err.message);
          console.log('failed registering');
        });
    });
  }

  captureUsers() {
    this.firebaseService
      .writeData(
        'InnTee',
        'Mst_Users',
        Object.assign({}, this.user),
        this.user.UserGuid,
      )
      .then(() => {
        console.log('added');
        this.onAdd();
      })
      .catch((err) => {
        console.log('failed adding');
        this.popUp.showError(err);
      });
  }

  addUser() {
    this.firebaseService
      .writeData(
        'InnTee',
        'Mst_Users',
        Object.assign({}, this.user),
        this.user.UserGuid,
      )
      .then(() => {
        console.log('added');
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
        console.log('failed adding');
      });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Users',
        Object.assign({}, this.user),
        this.user.UserGuid,
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
