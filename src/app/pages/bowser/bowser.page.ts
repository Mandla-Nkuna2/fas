import { Component, OnInit } from '@angular/core';
import Bowser from 'src/app/models/supportdata/Bowser.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-bowser',
  templateUrl: './bowser.page.html',
  styleUrls: ['./bowser.page.scss'],
})
export class BowserPage implements OnInit {
  organization = 'InnTee';
  bowser: Bowser;
  bowsers: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  bowserLoc: any[];
  fuelType: any[];
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.bowser = new Bowser();
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
      this.onFuelType();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowsers(this.organization)
        .then((mNm: any) => {
          this.bowsers = mNm;
          this.onBowserLocLeft();
          this.onFuelType();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onBowserLocLeft() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      this.bowserLoc = mNm;

      mNm.forEach((elm) => {
        this.bowsers.forEach((obj) => {
          if (elm.LocItemCode == obj.BowserLoc) {
            obj.Bowser = elm.LocDesc;
          }
        });
      });
    });
  }

  onFuelType() {
    this.firebaseGetServ.getFuelType(this.organization).then((mNm: any) => {
      this.fuelType = mNm;

      mNm.forEach((elm) => {
        this.bowsers.forEach((obj) => {
          if (elm.FuelTypeGuid == obj.FuelTypeGuid) {
            obj.FuelType = elm.FuelType;
          }
        });
      });
    });
  }

  onAdd() {
    this.bowser.BowserGuid = uuidv4();
    this.bowser.CaptureName = this.returnedUser.UserFirstName;
    this.bowser.Active = 'Y';

    if (this.bowser.BowserLoc)
      this.bowser.BowserLoc = this.bowser.BowserLoc['LocItemCode'];
    if (this.bowser.FuelTypeGuid)
      this.bowser.FuelTypeGuid = this.bowser.FuelTypeGuid['FuelTypeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Bowser',
        Object.assign({}, this.bowser),
        this.bowser.BowserGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.bowser = new Bowser();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    this.bowser = item;
    this.editBool = true;
  }

  onModify() {
    if (this.bowser.BowserLoc)
      if (this.bowser.BowserLoc['LocItemCode'])
        this.bowser.BowserLoc = this.bowser.BowserLoc['LocItemCode'];
    if (this.bowser.FuelTypeGuid)
      if (this.bowser.FuelTypeGuid['FuelTypeGuid'])
        this.bowser.FuelTypeGuid = this.bowser.FuelTypeGuid['FuelTypeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Bowser',
        Object.assign({}, this.bowser),
        this.bowser.BowserGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.bowser = new Bowser();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
