import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/systemmanagement/User.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { firebaseConfig } from '../../app.firebase.config';
import firebase from 'firebase/app';
import 'firebase/functions';
import { HttpClient } from '@angular/common/http';

// firebase.initializeApp(firebaseConfig);
const apiUrl =
  'https://us-central1-fleet-administration-system.cloudfunctions.net/testOnReq';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  organization = 'InnTee';
  user: User;
  users: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  userGroup: any;
  userGroups: any[];
  locations: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
    private http: HttpClient,
  ) {
    this.user = new User();
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
      this.onLocation();
    });
  }

  onTableRep() {
    this.firebaseRepServ
      .getUsers(this.organization)
      .then((mNm: any) => {
        this.users = mNm;
        this.onUserGroup();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onUserGroup() {
    this.firebaseGetServ.getUserGroup(this.organization).then((mNm: any) => {
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
    this.firebaseGetServ.getLocation(this.organization).then((mNm: any) => {
      this.locations = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      this.locations = mNm;
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
    this.user.Active = 'Y';
    this.user.UserLogin = this.user.UserLogin.toLowerCase();
    this.user.Capturename = this.returnedUser.UserFirstName;

    if (this.user.UserGroupGuid)
      this.user.UserGroupGuid = this.user.UserGroupGuid['UserGroupGuid'];
    if (this.user.LocUserCode)
      this.user.LocUserCode = this.user.LocUserCode['LocGuid'];

    return new Promise<any>((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(
          this.user.UserLogin,
          this.user.UserPassword,
        )
        .then((res) => {
          resolve(res);
          this.onAdd();
          // this.add();
        })
        .catch((err) => {
          reject(err.message);
          this.popUp.showAlert('Failed', err.message);
        });
    });
  }

  onAdd() {
    this.firebaseService
      .write(
        this.organization,
        'Mst_Users',
        Object.assign({}, this.user),
        this.user.UserGuid,
      )
      .then(() => {
        if (this.user.organization != 'InnTee') {
          this.captureUsers();
        } else {
          this.getCurrentUser();
          this.popUp.showToast('User added successfully...');
          this.user = new User();
        }
      })
      .catch((err) => {
        this.popUp.showError(err);
        console.log('err: ', err.message);
      });
  }

  captureUsers() {
    this.firebaseService
      .write(
        'InnTee',
        'Mst_Users',
        Object.assign({}, this.user),
        this.user.UserGuid,
      )
      .then(() => {
        this.getCurrentUser();
        this.popUp.showAlert('Success', 'User added successfully :-)');
        this.user = new User();
      })
      .catch((err) => {
        console.log('err: ', err.message);
        this.popUp.showError(err);
      });
  }

  add() {
    this.firebaseService
      .write(
        'InnTee',
        'Mst_Users',
        Object.assign({}, this.user),
        this.user.UserGuid,
      )
      .then(() => {
        console.log('added');
        this.getCurrentUser();
        this.popUp.showAlert('Success', 'User added successfully :-)');
        this.user = new User();
      })
      .catch((err) => {
        this.popUp.showError(err);
        console.log('err: ', err.message);
      });
  }

  onTest() {
    // const testOnReq = firebase.functions().httpsCallable('testOnReq');
    // testOnReq({ email: 'a@a.com', password: 'qwe123' }).then((result) => {
    //   console.log('result: ', result);
    //   console.log('called cf and created acc');
    // }),
    //   (error) => {
    //     console.log('called cf but couldnt create acc', error.message);
    //   };

    this.http.post(apiUrl, { message: 'testing writing' }).subscribe((res) => {
      console.log(res);
    });
  }

  // public registerPhone(number: string) {
  //   return new Promise((resolve, reject) => {
  //     let mainUl =
  //       'https://us-central1-swiftmeetapp.cloudfunctions.net/sendOTPcode';
  //     let corsUrl: 'https://102.223.196.138:9998/';
  //     this.setVerificationCode().then((code: string) => {
  //       this.http
  //         .post(
  //           mainUl,
  //           {
  //             number,
  //             code,
  //           },
  //           {},
  //         )
  //         .then((res) => {
  //           resolve('code sent');
  //         })
  //         .catch((error) => {
  //           reject(error);
  //         });
  //     });
  //   });
  // }

  // onTest1() {
  //   testOncall({ message: 'testing writing' }).then((result) => {
  //     console.log('result: ', result);
  //     console.log('called cf and wrote');
  //   }),
  //     (error) => {
  //       console.log('called cf but couldnt write', error.message);
  //     };
  // }

  onModify() {}
  onDeActivate() {}
  onClear() {}
}
