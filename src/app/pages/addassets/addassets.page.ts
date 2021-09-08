import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Asset } from './../../models/capture/Asset.model';
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

  currentDate = new Date();
  loadingComplete = false;
  makesAndModels: any = [];
  assetTypes: any = [];
  colors: any = [];
  tyreSizes: any = [];
  batteries: any = [];
  batteryMake: any = [];
  drivers: any = [];
  meterTypes: any = [];
  categories: any = [];
  votecodes: any = [];

  drop: false;
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.asset = new Asset();
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

      this.onMakeAndModel();
      this.onAssetType();
      this.onCategory();
      this.onColor();
      this.onBattery();
      this.onDriver();
      this.onTireSizes();
      this.onMeterType();
      this.onVotecode();
    });
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  onMakeAndModel() {
    this.firebaseGetServ
      .getAssetMakenModel(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          elm.itemMakMod = elm.ItemMake;
          if (elm.ItemModel) elm.itemMakMod += ' ' + elm.ItemModel;
        });
        this.makesAndModels = mNm;
      });
  }
  onMakeAndModelLeft() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          elm.itemMakMod = elm.ItemMake;
          if (elm.ItemModel) elm.itemMakMod += ' ' + elm.ItemModel;
        });
        this.makesAndModels = mNm;
      });
  }

  onAssetType() {
    this.firebaseGetServ.getItemType(this.organization).then((mNm: any) => {
      this.assetTypes = mNm;
      this.onTypeNameLeft();
    });
  }

  onTypeNameLeft() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assetTypes.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemTypeNameGuid) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
        this.onTypeClassLeft();
      });
  }

  onTypeClassLeft() {
    this.firebaseGetServ
      .getItemTypeClassLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assetTypes.forEach((obj) => {
            if (elm.ItemTypeClassGuid == obj.ItemTypeClassGuid) {
              obj.ItemTypeClass = elm.ItemTypeClass;
            }
          });
        });
        this.onTypeCapacityLeft();
      });
  }

  onTypeCapacityLeft() {
    this.firebaseGetServ
      .getTypeCapacityLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assetTypes.forEach((obj) => {
            if (elm.ItemTypeCapGuid == obj.ItemTypeCapGuid) {
              obj.ItemTypeCap = elm.ItemTypeCap + ' ' + obj.ItemTypeUnit;
            }
          });
        });
        this.onTypeDsplyName();
      });
  }

  onTypeDsplyName() {
    this.assetTypes.forEach((obj) => {
      obj.displayName = obj.ItemTypeName;

      if (obj.ItemTypeClass)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeClass;

      if (obj.ItemTypeCap)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeCap;
    });
  }

  onCategory() {
    this.firebaseGetServ
      .getAssetCategoryLeft(this.organization)
      .then((mNm: any) => {
        this.categories = mNm;
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

  onMeterType() {
    this.firebaseGetServ
      .getMeterTypeLeft(this.organization)
      .then((mNm: any) => {
        this.meterTypes = mNm;
      });
  }

  onVotecode() {
    this.firebaseGetServ.getVoteCodes(this.organization).then((mNm: any) => {
      this.votecodes = mNm;
    });
  }
  onVotecodeLeft() {
    this.firebaseGetServ
      .getVoteCodesLeft(this.organization)
      .then((mNm: any) => {
        this.votecodes = mNm;
      });
  }

  onAdd() {
    this.asset.ItemGuid = uuidv4();

    this.asset.CaptureName = this.returnedUser.UserFirstName;
    if (this.asset.ItemMakModGuid)
      this.asset.ItemMakModGuid = this.asset.ItemMakModGuid['ItemMakModGuid'];
    if (this.asset.ItemTypeGuid)
      this.asset.ItemTypeGuid = this.asset.ItemTypeGuid['ItemTypeGuid'];
    if (this.asset.ColourGuid)
      this.asset.ColourGuid = this.asset.ColourGuid['ColourGuid'];
    if (this.asset.BatteryGuid)
      this.asset.BatteryGuid = this.asset.BatteryGuid['BatteryGuid'];
    if (this.asset.StaffGuid)
      this.asset.StaffGuid = this.asset.StaffGuid['StaffGuid'];
    if (this.asset.FrontTyreGuid)
      this.asset.FrontTyreGuid = this.asset.FrontTyreGuid['TyreSizeGuid'];
    if (this.asset.RearTyreGuid)
      this.asset.RearTyreGuid = this.asset.RearTyreGuid['TyreSizeGuid'];
    if (this.asset.MeterType)
      this.asset.MeterType = this.asset.MeterType['meterTypeUuid'];
    if (this.asset.Votecode)
      this.asset.Votecode = this.asset.Votecode['VoteCodeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Item',
        Object.assign({}, this.asset),
        this.asset.ItemGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.asset = new Asset();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
