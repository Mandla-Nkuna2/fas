import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ComponentName from 'src/app/models/supportdata/ComponentName.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-componentname',
  templateUrl: './componentname.page.html',
  styleUrls: ['./componentname.page.scss'],
})
export class ComponentnamePage implements OnInit {
  organization = 'InnTee';
  componentName: ComponentName;
  componentNames: ComponentName[] = [];

  currentDate = new Date();
  returnedUser: any;
  compSubCatView = false;
  compNames: any[];
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.componentName = new ComponentName();
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
      this.onCompName();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getComponentNames(this.organization)
        .then((mNm: any) => {
          this.componentNames = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onCompSubCatView() {
    this.compSubCatView = !this.compSubCatView;
  }

  onCompName() {
    this.firebaseGetServ.getCompName(this.organization).then((mNm: any) => {
      this.compNames = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft(this.organization).then((mNm: any) => {
      this.compNames = mNm;
    });
  }

  onAdd() {
    this.componentName.CompNameGuid = uuidv4();
    this.componentName.CapName = this.returnedUser.UserFirstName;
    this.componentName.Active = 'Y';

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_CompName',
        Object.assign({}, this.componentName),
        this.componentName.CompNameGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.componentName = new ComponentName();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

    onEdit(item) {
    this.componentName = item;
    this.editBool = true;
  }

 onModify() {
    this.firebaseService
      .writeData(
        this.organization,
        'Sup_CompName',
        Object.assign({}, this.componentName),
        this.componentName.CompNameGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.componentName = new ComponentName();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
