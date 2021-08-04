import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import {
  Asset,
  GeneralInformation,
  MeterInformation,
  OtherInformation,
  RateInformation,
} from './../../models/capture/Asset.model';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.page.html',
  styleUrls: ['./addassets.page.scss'],
})
export class AddassetsPage implements OnInit {
  organization = 'InnTee';
  asset: Asset;
  assets: any = [];

  loadingComplete = false;
  makesAndModels: any = [];
  colors: any = [];
  tyreSizes: any = [];
  batteries: any = [];
  batteryMake: any = [];
  drivers: any = [];
  meterTypes: any = ['HOUR', 'KM', 'N/A'];
  categories: any = ['MAJOR EQUIPMENT', 'METERLESS EQUIPMENT', 'VEHICLES'];

  drop: false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.asset = new Asset();
    this.asset.generalInformation = Object.assign({}, new GeneralInformation());
    this.asset.meterInformation = Object.assign({}, new MeterInformation());
    this.asset.rateInformation = Object.assign({}, new RateInformation());
    this.asset.otherInformation = Object.assign({}, new OtherInformation());
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  onMakeAndModel() {
    this.firebaseGetServ
      .getAssetMakenModel(this.organization)
      .then((mNm: any) => {
        this.makesAndModels = mNm;
      });
  }
  onMakeAndModelLeft() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        this.makesAndModels = mNm;
      });
  }

  onColor() {
    this.firebaseGetServ.getColor(this.organization).then((col: any) => {
      this.colors = col;
    });
  }
  onColorLeft() {
    this.firebaseGetServ.getColorLeft(this.organization).then((col: any) => {
      this.colors = col;
    });
  }

  onBattery() {
    this.firebaseGetServ.getBatteryMake(this.organization).then((col: any) => {
      this.batteryMake = col;
    });

    this.firebaseGetServ.getBattery(this.organization).then((col: any) => {
      col.forEach((batObj) => {
        this.batteryMake.forEach((batMk) => {
          if (batMk.BatteryMakeGuid == batObj.BatteryMakeGuid) {
            batObj.BatteryMake = batMk.BatteryMake;
          }
        });
        batObj.BatteryText = batObj.BatterySize + ' ' + batObj.BatteryMake;
      });
      this.batteries = col;
    });
  }
  onBatteryLeft() {
    this.firebaseGetServ.getBatteryLeft(this.organization).then((col: any) => {
      col.forEach((batObj) => {
        this.batteryMake.forEach((batMk) => {
          if (batMk.BatteryMakeGuid == batObj.BatteryMakeGuid) {
            batObj.BatteryMake = batMk.BatteryMake;
          }
        });
        batObj.BatteryText = batObj.BatterySize + ' ' + batObj.BatteryMake;
      });
      this.batteries = col;
    });
  }

  onDriver() {
    this.firebaseGetServ.getStaff(this.organization).then((col: any) => {
      this.drivers = col;
    });
  }
  onDriverLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((col: any) => {
      this.drivers = col;
    });
  }

  onTireSizes() {
    this.firebaseGetServ.getTyreSize(this.organization).then((size: any) => {
      this.tyreSizes = size;
    });
  }
  onTireSizesLeft() {
    this.firebaseGetServ
      .getTyreSizeLeft(this.organization)
      .then((size: any) => {
        this.tyreSizes = size;
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

      this.onMakeAndModel();
      this.onColor();
      this.onBattery();
      this.onDriver();
      this.onTireSizes();
    });
  }

  onAdd() {
    this.asset.generalInformation.ItemGuid = uuidv4();
    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Item',
        Object.assign({}, this.asset),
        this.asset.generalInformation.ItemGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
