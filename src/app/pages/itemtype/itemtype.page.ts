import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemType from 'src/app/models/supportdata/ItemType.model';

@Component({
  selector: 'app-itemtype',
  templateUrl: './itemtype.page.html',
  styleUrls: ['./itemtype.page.scss'],
})
export class ItemtypePage implements OnInit {
  itemType: ItemType;
  typeNames: any[];
  typeClass: any[];
  typeCapacity: any[];
  typeUnit = [
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
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.itemType = new ItemType();
  }

  ngOnInit() {
    // this.onTypeName();
    // this.onTypeClass();
    // this.onTypeCapacity();
  }

  onTypeName() {
    this.firebaseGetServ.getAssetTypeName().then((mNm: any) => {
      this.typeNames = mNm;
    });
  }
  onTypeNameLeft() {
    this.firebaseGetServ.getAssetTypeNameLeft().then((mNm: any) => {
      this.typeNames = mNm;
    });
  }

  onTypeClass() {
    this.firebaseGetServ.getItemTypeClass().then((mNm: any) => {
      this.typeClass = mNm;
    });
  }
  onTypeClassLeft() {
    this.firebaseGetServ.getItemTypeClassLeft().then((mNm: any) => {
      this.typeClass = mNm;
    });
  }

  onTypeCapacity() {
    this.firebaseGetServ.getTypeCapacity().then((mNm: any) => {
      this.typeCapacity = mNm;
    });
  }
  onTypeCapacityLeft() {
    this.firebaseGetServ.getTypeCapacityLeft().then((mNm: any) => {
      this.typeCapacity = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Sup_ItemType',
        this.itemType,
        this.itemType.ItemTypeGuid,
      )
      .then(() => {
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
