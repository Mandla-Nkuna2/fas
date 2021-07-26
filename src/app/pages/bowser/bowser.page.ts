import { Component, OnInit } from '@angular/core';
import Bowser from 'src/app/models/supportdata/Bowser.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-bowser',
  templateUrl: './bowser.page.html',
  styleUrls: ['./bowser.page.scss'],
})
export class BowserPage implements OnInit {
  bowser: Bowser;
  bowsers: any[] = [];

  bowserLoc: any[];
  fuelType: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.bowser = new Bowser();
  }

  ngOnInit() {
    this.onTableRep();
    this.onBowserLoc();
    this.onFuelType();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getBowsers()
        .then((mNm: any) => {
          this.bowsers = mNm;
          this.onBowserLocCodeLeft();
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

  onBowserLoc() {
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.bowserLoc = mNm;
    });
  }
  onBowserLocLeft() {
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.bowserLoc = mNm;
    });
  }

  onBowserLocCodeLeft() {
    this.firebaseRepServ.getLocationLeft().then((mNm: any) => {
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
    this.firebaseGetServ.getFuelType().then((mNm: any) => {
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
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_Bowser',
        Object.assign({}, this.bowser),
        this.bowser.BowserGuid,
      )
      .then(() => {
        console.log(this.bowser.BowserGuid);
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
