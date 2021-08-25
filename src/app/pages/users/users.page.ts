import { Component, OnInit, ViewChild } from '@angular/core';
import User from 'src/app/models/systemmanagement/User.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import 'firebase/functions';
import { HttpClient } from '@angular/common/http';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import {
  AlertController,
  IonContent,
  IonSlides,
  NavController,
} from '@ionic/angular';
import { Observable } from 'rxjs';

const apiUrl =
  'https://us-central1-fleet-administration-system.cloudfunctions.net/';

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
  tableVu = true;

  userObject;

  userProj = [];

  userPermList = {
    projects: true,
    addProj: true,
    editProj: true,
  };

  consultPermList = {
    projects: true,
    addProj: false,
    editProj: true,
    deleteProj: false,
  };

  displayPerm = {
    projects: true,
    addProj: true,
    editProj: true,
    deleteProj: true,
    viewProj: true,
    documents: true,
    addDoc: true,
    editDoc: true,
    deleteDoc: true,
    viewDoc: true,
    downloadDoc: true,
    claims: true,
    addClaim: true,
    editClaim: true,
    deleteClaim: true,
    viewClaim: true,
    downloadClaim: true,
    progress: true,
    addProg: true,
    editProg: true,
    viewProg: true,
    downloadStage: true,
    notes: true,
    addNote: true,
    viewNote: true,
    photo: true,
    addPhoto: true,
    viewPhoto: true,
    stats: true,
    addStats: true,
    viewStats: true,
    serviceProviders: true,
    addSP: true,
    viewSP: true,
    editSP: true,
    deleteSP: true,
    users: true,
    addUser: true,
    editUser: true,
    deleletUser: true,
    viewUser: true,
    viewReports: true,
    downloadReports: true,
    downloadLogs: true,
    allProj: true,
    selectProj: false,
  };

  usersb = false;
  sps = false;
  project = false;
  documents = false;
  claims = false;
  progress = false;
  notes = false;
  photo = false;
  stats = false;

  projectsCollection: AngularFirestoreCollection<any>;
  projects: Observable<any[]>;
  allProjects = [
    { name: 'Dahsboard', checked: false },
    { name: 'Assets', checked: false },
    { name: 'Maintenance', checked: false },
    { name: 'Staff', checked: false },
  ];

  nxtButton: boolean = true;
  prevButton: boolean = false;
  exitButton: boolean = true;
  slideNumber: number = 0;

  allProjs = false;

  @ViewChild('slides', { static: false }) slides: IonSlides;
  @ViewChild('content', { static: false }) content: IonContent;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
    private http: HttpClient,
    public router: Router,
    public toast: ToastService,
    public loading: LoadingService,
    // private storage: Storage,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.getCurrentUser();
    // this.slides.lockSwipes(true);
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

    this.http.post(apiUrl + 'registerUser', this.user).subscribe(
      (res) => {
        this.onAdd();
        // this.add();
        console.log('registerUser res', res);
      },
      (err) => {
        this.popUp.showAlert('Failed', err);
      },
    );
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

  selectAllProjects() {}

  view(string) {
    if (string === 'users') {
      if (this.usersb === true) {
        this.usersb = false;
      } else {
        this.usersb = true;
      }
    } else if (string === 'sps') {
      if (this.sps === true) {
        this.sps = false;
      } else {
        this.sps = true;
      }
    } else if (string === 'projects') {
      if (this.project === true) {
        this.project = false;
      } else {
        this.project = true;
      }
    } else if (string === 'docs') {
      if (this.documents === true) {
        this.documents = false;
      } else {
        this.documents = true;
      }
    } else if (string === 'claims') {
      if (this.claims === true) {
        this.claims = false;
      } else {
        this.claims = true;
      }
    } else if (string === 'photos') {
      if (this.photo === true) {
        this.photo = false;
      } else {
        this.photo = true;
      }
    } else if (string === 'stats') {
      if (this.stats === true) {
        this.stats = false;
      } else {
        this.stats = true;
      }
    } else if (string === 'progress') {
      if (this.progress === true) {
        this.progress = false;
      } else {
        this.progress = true;
      }
    } else if (string === 'notes') {
      if (this.notes === true) {
        this.notes = false;
      } else {
        this.notes = true;
      }
    }
  }

  // Ensure only one toggle is selected (either all projects or selected)
  projView(string) {
    if (string === 'all') {
      if (this.displayPerm.allProj === true) {
        this.displayPerm.selectProj = true;
      } else {
        this.displayPerm.selectProj = false;
      }
    } else if (string === 'selected') {
      if (this.displayPerm.selectProj === true) {
        this.displayPerm.allProj = true;
      } else {
        this.displayPerm.allProj = false;
      }
    }
  }

  async getSlideNumber() {
    this.slideNumber = await this.slides.getActiveIndex();
  }

  async prev() {
    this.tableVu = false;
    this.nxtButton = true;
    this.slides.lockSwipes(false);
    this.getSlideNumber().then(() => {
      if (this.slideNumber === 1) {
        this.tableVu = true;
        this.exitButton = true;
        this.prevButton = false;
      } else {
        this.prevButton = true;
        this.exitButton = false;
      }
      this.slides.slidePrev();
      this.content.scrollToTop().then(() => {
        this.slides.lockSwipes(true);
      });
    });
  }

  next() {
    this.tableVu = false;
    this.getSlideNumber().then(() => {
      this.prevButton = true;
      this.exitButton = false;
      if (this.slideNumber > 0) {
        this.exitButton = false;
        this.prevButton = true;
      }
      this.slides.lockSwipes(false).then(() => {
        this.slides.slideNext().then(() => {
          this.content.scrollToTop().then(() => {
            this.slides.lockSwipes(true);
            if (this.slideNumber === 1) {
              this.nxtButton = false;
            }
          });
        });
      });
    });
  }
}
