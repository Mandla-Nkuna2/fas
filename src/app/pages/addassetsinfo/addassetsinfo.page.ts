import Votecodes from 'src/app/models/supportdata/VoteCode.model';
import { Component, OnInit } from '@angular/core';
import Battery from 'src/app/models/capture/Battery.model';
import ItemColor from 'src/app/models/capture/ItemColor.model';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from '../../services/firebase-service/firebase-service.service';
import { PopupHelper } from '../../services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import AssetTypeName from 'src/app/models/capture/AssetTypeName.model';
import AssetTypeClass from 'src/app/models/capture/AssetTypeClass.model';
import AssetTypeCap from 'src/app/models/capture/AssetTypeCap.model';
import FuelType from 'src/app/models/capture/FuelType.model';
import AssetCategory from 'src/app/models/capture/AssetCategory.model';
import MeterType from 'src/app/models/capture/MeterType.model';
import TyreSize from 'src/app/models/capture/TyreSize.model';
import ComponentMake from 'src/app/models/capture/ComponentMake.model';
import ComponentModel from 'src/app/models/capture/ComponentModel.model';
import ServiceInterval from 'src/app/models/capture/ServiceInterval.model';
import LossControlType from 'src/app/models/capture/LossControlType.model';
import LossControlAction from 'src/app/models/capture/LossControlAction.model';

@Component({
  selector: 'app-addassetsinfo',
  templateUrl: './addassetsinfo.page.html',
  styleUrls: ['./addassetsinfo.page.scss'],
})
export class AddassetsinfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  itemMakeMod: ItemMakeAndModel;
  itemTypeName: AssetTypeName;
  itemTypeClass: AssetTypeClass;
  itemTypeCap: AssetTypeCap;
  fuelType: FuelType;
  assetCat: AssetCategory;
  meterType: MeterType;
  itemColor: ItemColor;
  battery: Battery;
  tyreSize: TyreSize;
  voteCode: Votecodes;
  compMake: ComponentMake;
  compModel: ComponentModel;
  servIntvl: ServiceInterval;
  lossContType: LossControlType;
  lossContAct: LossControlAction;

  classes: any[];
  batteryMakes: any[];
  yesNo = ['Y', 'N'];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.itemMakeMod = new ItemMakeAndModel();
    this.itemTypeName = new AssetTypeName();
    this.itemTypeClass = new AssetTypeClass();
    this.itemTypeCap = new AssetTypeCap();
    this.fuelType = new FuelType();
    this.assetCat = new AssetCategory();
    this.meterType = new MeterType();
    this.itemColor = new ItemColor();
    this.battery = new Battery();
    this.tyreSize = new TyreSize();
    this.voteCode = new Votecodes();
    this.compMake = new ComponentMake();
    this.compModel = new ComponentModel();
    this.servIntvl = new ServiceInterval();
    this.lossContType = new LossControlType();
    this.lossContAct = new LossControlAction();
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
    });
  }

  onAddMakeModel() {
    this.itemMakeMod.ItemMakModGuid = uuidv4();

    this.itemMakeMod.Lic = 'Y';
    this.itemMakeMod.COF = 'N';
    this.itemMakeMod.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_ItemMakMod',
        Object.assign({}, this.itemMakeMod),
        this.itemMakeMod.ItemMakModGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.itemMakeMod = new ItemMakeAndModel();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddFuelType() {
    this.fuelType.FuelTypeGuid = uuidv4();
    this.fuelType.Active = 'Y';
    this.fuelType.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_FuelType',
        Object.assign({}, this.fuelType),
        this.fuelType.FuelTypeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.fuelType = new FuelType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddAssetCat() {
    this.assetCat.Active = 'Y';
    this.assetCat.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'AssetCategory',
        Object.assign({}, this.assetCat),
        uuidv4(),
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.assetCat = new AssetCategory();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddItemColor() {
    this.itemColor.ColourGuid = uuidv4();

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_Colour',
        Object.assign({}, this.itemColor),
        this.itemColor.ColourGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.itemColor = new ItemColor();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddMeterType() {
    this.meterType.meterTypeUuid = uuidv4();
    this.meterType.Active = 'Y';
    this.meterType.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'MeterTypes',
        Object.assign({}, this.meterType),
        this.meterType.meterTypeUuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.meterType = new MeterType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddBattery() {
    this.battery.BatteryGuid = uuidv4();

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_Battery',
        Object.assign({}, this.battery),
        this.battery.BatteryGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.battery = new Battery();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddTyreSize() {
    this.tyreSize.TyreSizeGuid = uuidv4();
    this.tyreSize.Active = 'Y';
    this.tyreSize.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_TyreSize',
        Object.assign({}, this.tyreSize),
        this.tyreSize.TyreSizeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.tyreSize = new TyreSize();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddVotecode() {
    this.voteCode.VoteCodeGuid = uuidv4();

    this.firebaseSevice
      .writeData(
        this.organization,
        'Trn_Votecodes',
        Object.assign({}, this.voteCode),
        this.voteCode.VoteCodeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.voteCode = new Votecodes();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddCompMake() {
    this.compMake.CompMakeGuid = uuidv4();
    this.compMake.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_CompMake',
        Object.assign({}, this.compMake),
        this.compMake.CompMakeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.compMake = new ComponentMake();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddCompModel() {
    this.compModel.CompModelGuid = uuidv4();
    this.compModel.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_CompModel',
        Object.assign({}, this.compModel),
        this.compModel.CompModelGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.compModel = new ComponentModel();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddServIntvl() {
    this.servIntvl.ServIntvalGuid = uuidv4();
    this.servIntvl.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_ServIntval',
        Object.assign({}, this.servIntvl),
        this.servIntvl.ServIntvalGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.servIntvl = new ServiceInterval();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddLossContType() {
    this.lossContType.LossContTypeguid = uuidv4();
    this.lossContType.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_LossContType',
        Object.assign({}, this.lossContType),
        this.lossContType.LossContTypeguid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.lossContType = new LossControlType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddLossContAct() {
    this.lossContAct.LossContActGuid = uuidv4();
    this.lossContAct.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_LossContAct',
        Object.assign({}, this.lossContAct),
        this.lossContAct.LossContActGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.lossContAct = new LossControlAction();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
