import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import LocationModel from 'src/app/models/supportdata/Location.model';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  organization = 'InnTee';
  location: LocationModel;
  locations: any[] = [];

  returnedUser: any;
  currentDate = new Date();
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.location = new LocationModel();
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
        .getLocation(this.organization)
        .then((mNm: any) => {
          this.locations = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onAdd() {
    this.location.LocGuid = uuidv4();
    this.location.LocItemCode = uuidv4();
    this.location.captureName = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Location',
        Object.assign({}, this.location),
        this.location.LocGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.location = new LocationModel();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

    onEdit(item) {
    this.location = item;
    this.editBool = true;
  }

  onModify() {
    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Location',
        Object.assign({}, this.location),
        this.location.LocGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.location = new LocationModel();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
