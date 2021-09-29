import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-itemmakemodel',
  templateUrl: './itemmakemodel.page.html',
  styleUrls: ['./itemmakemodel.page.scss'],
})
export class ItemmakemodelPage implements OnInit {
  organization = 'InnTee';
  item: ItemMakeAndModel;
  items: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  makes: any[];
  models: any[];
  fuelTypes: any[];
  editBool = false;
  transmissions = [
    'AUTOMATIC',
    'ELECTRIC',
    'HYDROSTATIC',
    'MANUAL',
    'N/A',
    'PRE SELECT',
    'POWER SHUTTLE',
    'POWERSHIFT',
    'SEMI AUTOMATIC',
  ];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.item = new ItemMakeAndModel();
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
        .getItemMakeMod(this.organization)
        .then((mNm: any) => {
          this.items = mNm;
          this.onItemMakeModel();
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

  onItemMakeModel() {
    this.items.forEach((obj) => {
      obj.makeModel = obj.ItemMake;
      if (obj.ItemModel) obj.makeModel += ' ' + obj.ItemModel;
    });
  }

  onFuelType() {
    this.firebaseGetServ.getFuelType(this.organization).then((mNm: any) => {
      this.fuelTypes = mNm;

      mNm.forEach((elm) => {
        this.items.forEach((obj) => {
          if (elm.FuelTypeGuid == obj.FuelTypeGuid) {
            obj.FuelType = elm.FuelType;
          }
        });
      });
    });
  }

  check() {
    if (this.item.Lic === true) this.item.Lic = 'Y';
    else this.item.Lic = 'N';
    if (this.item.COF === true) this.item.COF = 'Y';
    else this.item.COF = 'N';
  }

  onAdd() {
    this.check();
    this.item.ItemMakModGuid = uuidv4();
    this.item.CapName = this.returnedUser.UserFirstName;
    this.item.Active = 'Y';

    if (this.item.FuelTypeGuid)
      this.item.FuelTypeGuid = this.item.FuelTypeGuid['FuelTypeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_ItemMakMod',
        Object.assign({}, this.item),
        this.item.ItemMakModGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.item = new ItemMakeAndModel();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    this.item = item;
    if (this.item.Lic === 'Y') this.item.Lic = true;
    else this.item.Lic = false;
    if (this.item.COF === 'Y') this.item.COF = true;
    else this.item.COF = false;
    this.editBool = true;
  }

  onModify() {
    this.check();
    if (this.item.FuelTypeGuid)
      if (this.item.FuelTypeGuid['FuelTypeGuid'])
        this.item.FuelTypeGuid = this.item.FuelTypeGuid['FuelTypeGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_ItemMakMod',
        Object.assign({}, this.item),
        this.item.ItemMakModGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.item = new ItemMakeAndModel();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
