import Votecodes from 'src/app/models/supportdata/VoteCode.model';
import { Component, OnInit } from '@angular/core';
import Battery from 'src/app/models/capture/Battery.model';
import ItemColor from 'src/app/models/capture/ItemColor.model';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';
import ItemType from 'src/app/models/supportdata/ItemType.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from '../../services/firebase-service/firebase-service.service';
import { PopupHelper } from '../../services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-addassetsinfo',
  templateUrl: './addassetsinfo.page.html',
  styleUrls: ['./addassetsinfo.page.scss'],
})
export class AddassetsinfoPage implements OnInit {
  organization = 'InnTee';

  itemMakeMod: ItemMakeAndModel;
  itemType: ItemType;
  itemColor: ItemColor;
  battery: Battery;
  voteCode: Votecodes;

  classes: any[];
  batteryMakes: any[];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.itemMakeMod = new ItemMakeAndModel();
    this.itemType = new ItemType();
    this.itemColor = new ItemColor();
    this.battery = new Battery();
    this.voteCode = new Votecodes();
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

      this.onClass();
      this.onBattery();
    });
  }

  onClass() {
    this.firebaseGetServ
      .getItemTypeClass(this.organization)
      .then((size: any) => {
        this.classes = size;
      });
  }
  onClassLeft() {
    this.firebaseGetServ
      .getItemTypeClassLeft(this.organization)
      .then((size: any) => {
        this.classes = size;
      });
  }

  onBattery() {
    this.firebaseGetServ.getBatteryMake(this.organization).then((size: any) => {
      this.batteryMakes = size;
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
    this.clear();
  }

  onAddItemType() {
    this.itemType.ItemTypeGuid = uuidv4();

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_ItemType',
        Object.assign({}, this.itemType),
        this.itemType.ItemTypeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.itemType = new ItemType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
    this.clear();
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
    this.clear();
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
    this.clear();
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
