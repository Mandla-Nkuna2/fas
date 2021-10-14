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
  returnedUser: any;
  typeNames: any[];
  typeClass: any[];
  typeCapacity: any[];
  typeUnit: string;
  editBool = false;
  tblNext = true;
  tblPrev = true;
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
        .getItemTypes(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.itemTypes = mNm;
          this.onTypeName();
          this.onTypeClass();
          this.onTypeCapacity();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemTypesNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.itemTypes = mNm;
          this.onTypeName();
          this.onTypeClass();
          this.onTypeCapacity();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemTypesPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.itemTypes = mNm;
          this.onTypeName();
          this.onTypeClass();
          this.onTypeCapacity();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemTypesLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.itemTypes = mNm;
          this.onTypeName();
          this.onTypeClass();
          this.onTypeCapacity();
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

  onEdit(item) {
    console.log(item);
    item.ItemTypeNameGuid = {
      ItemTypeNameGuid: item.ItemTypeNameGuid,
      ItemTypeName: item.ItemTypeName,
    };
    item.ItemTypeClassGuid = {
      ItemTypeClassGuid: item.ItemTypeClassGuid,
      ItemTypeClass: item.ItemTypeClass,
    };
    item.ItemTypeCapGuid = {
      ItemTypeCapGuid: item.ItemTypeCapGuid,
      ItemTypeCap: item.ItemTypeCap,
    };

    this.itemType = item;
    this.editBool = true;
  }

  onModify() {
    if (this.itemType.ItemTypeNameGuid)
      if (this.itemType.ItemTypeNameGuid['ItemTypeNameGuid'])
        this.itemType.ItemTypeNameGuid =
          this.itemType.ItemTypeNameGuid['ItemTypeNameGuid'];
    if (this.itemType.ItemTypeClassGuid)
      if (this.itemType.ItemTypeClassGuid['ItemTypeClassGuid'])
        this.itemType.ItemTypeClassGuid =
          this.itemType.ItemTypeClassGuid['ItemTypeClassGuid'];
    if (this.itemType.ItemTypeCapGuid)
      if (this.itemType.ItemTypeCapGuid['ItemTypeCapGuid'])
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
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.itemType = new ItemType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
