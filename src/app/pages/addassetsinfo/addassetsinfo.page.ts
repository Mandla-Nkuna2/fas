import Votecodes from 'src/app/models/supportdata/VoteCode.model';
import { Component, OnInit } from '@angular/core';
import Battery from 'src/app/models/capture/Battery.model';
import ItemColor from 'src/app/models/capture/ItemColor.model';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';
import ItemType from 'src/app/models/supportdata/ItemType.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from '../../services/firebase-service/firebase-service.service';
import { PopupHelper } from '../../services/helpers/popup-helper';

@Component({
  selector: 'app-addassetsinfo',
  templateUrl: './addassetsinfo.page.html',
  styleUrls: ['./addassetsinfo.page.scss'],
})
export class AddassetsinfoPage implements OnInit {
  itemMakeMod: ItemMakeAndModel;
  itemType: ItemType;
  itemColor: ItemColor;
  battery: Battery;
  voteCode: Votecodes;

  classes: any[];
  batteryMakes: any[];

  constructor(
    private firebaseSevice: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {
    this.itemMakeMod = new ItemMakeAndModel();
    this.itemType = new ItemType();
    this.itemColor = new ItemColor();
    this.battery = new Battery();
    this.voteCode = new Votecodes();
  }

  ngOnInit() {
    // this.onClass();
    // this.onBattery();
  }

  onClass() {
    this.firebaseGetServ.getItemTypeClass().then((size: any) => {
      this.classes = size;
    });
  }
  onClassLeft() {
    this.firebaseGetServ.getItemTypeClassLeft().then((size: any) => {
      this.classes = size;
    });
  }

  onBattery() {
    this.firebaseGetServ.getBatteryMake().then((size: any) => {
      this.batteryMakes = size;
    });
  }

  onAddMakeModel() {
    this.itemMakeMod.Lic = 'Y';
    this.itemMakeMod.COF = 'N';
    this.itemMakeMod.Active = 'Y';

    this.firebaseSevice
      .writeData(
        'myTest',
        'Sup_ItemMakMod',
        Object.assign({}, this.itemMakeMod),
        this.itemMakeMod.ItemMakModGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
    this.clear();
  }

  onAddItemType() {
    this.firebaseSevice
      .writeData(
        'myTest',
        'Sup_ItemType',
        Object.assign({}, this.itemType),
        this.itemType.ItemTypeGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
    this.clear();
  }

  onAddItemColor() {
    this.firebaseSevice
      .writeData(
        'myTest',
        'Sup_Colour',
        Object.assign({}, this.itemColor),
        this.itemColor.ColourGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
    this.clear();
  }

  onAddBattery() {
    this.firebaseSevice
      .writeData(
        'myTest',
        'Sup_Battery',
        Object.assign({}, this.battery),
        this.battery.BatteryGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
    this.clear();
  }

  onAddVotecode() {
    this.firebaseSevice
      .writeData(
        'myTest',
        'Trn_Votecodes',
        Object.assign({}, this.voteCode),
        this.voteCode.VoteCodeGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
    this.clear();
  }

  clear() {
    this.itemMakeMod = new ItemMakeAndModel();
    this.itemType = new ItemType();
    this.itemColor = new ItemColor();
    this.battery = new Battery();
    this.voteCode = new Votecodes();
  }
}
