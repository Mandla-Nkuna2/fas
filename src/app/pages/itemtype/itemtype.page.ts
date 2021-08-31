import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemType from 'src/app/models/supportdata/ItemType.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-itemtype',
  templateUrl: './itemtype.page.html',
  styleUrls: ['./itemtype.page.scss'],
})
export class ItemtypePage implements OnInit {
  organization = 'InnTee';
  itemType: ItemType;
  itemTypes: any[] = [];

  currentDate = new Date();
  typeNames: any[];
  typeClass: any[];
  typeCapacity: any[];
  typeUnit: string;
  typeUnits = [
    'cc',
    'cfm',
    'kg',
    'kVA',
    'KW',
    'l/hr',
    'litres',
    'm³',
    'seats',
    'ton',
  ];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.itemType = new ItemType();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemTypes(this.organization)
        .then((mNm: any) => {
          this.itemTypes = mNm;
          this.onTypeNameLeft();
          this.onTypeClassLeft();
          this.onTypeCapacityLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onTypeName() {
    this.firebaseGetServ
      .getAssetTypeName(this.organization)
      .then((mNm: any) => {
        this.typeNames = mNm;
      });
  }
  onTypeNameLeft() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        this.typeNames = mNm;

        mNm.forEach((elm) => {
          this.itemTypes.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemTypeNameGuid) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
      });
  }

  onTypeClass() {
    this.firebaseGetServ
      .getItemTypeClass(this.organization)
      .then((mNm: any) => {
        this.typeClass = mNm;
      });
  }
  onTypeClassLeft() {
    this.firebaseGetServ
      .getItemTypeClassLeft(this.organization)
      .then((mNm: any) => {
        this.typeClass = mNm;

        mNm.forEach((elm) => {
          this.itemTypes.forEach((obj) => {
            if (elm.ItemTypeClassGuid == obj.ItemTypeClassGuid) {
              obj.ItemTypeClass = elm.ItemTypeClass;
            }
          });
        });
      });
  }

  onTypeCapacity() {
    this.firebaseGetServ.getTypeCapacity(this.organization).then((mNm: any) => {
      this.typeCapacity = mNm;
    });
  }
  onTypeCapacityLeft() {
    this.firebaseGetServ
      .getTypeCapacityLeft(this.organization)
      .then((mNm: any) => {
        this.typeCapacity = mNm;

        mNm.forEach((elm) => {
          this.itemTypes.forEach((obj) => {
            if (elm.ItemTypeCapGuid == obj.ItemTypeCapGuid) {
              obj.ItemTypeCap = elm.ItemTypeCap;
            }
          });
        });
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
      this.returnedUser = user;

      this.onTableRep();
      this.onTypeName();
      this.onTypeClass();
      this.onTypeCapacity();
    });
  }

  onAdd() {
    this.itemType.ItemTypeGuid = uuidv4();
    this.itemType.CapName = this.returnedUser.UserFirstName;

    if (this.itemType.ItemTypeNameGuid)
      this.itemType.ItemTypeNameGuid =
        this.itemType.ItemTypeNameGuid['ItemTypeNameGuid'];
    if (this.itemType.ItemTypeClassGuid)
      this.itemType.ItemTypeClassGuid =
        this.itemType.ItemTypeClassGuid['ItemTypeClassGuid'];
    if (this.itemType.ItemTypeCapGuid)
      this.itemType.ItemTypeCapGuid =
        this.itemType.ItemTypeCapGuid['ItemTypeCapGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_ItemType',
        Object.assign({}, this.itemType),
        this.itemType.ItemTypeGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.itemType = new ItemType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
