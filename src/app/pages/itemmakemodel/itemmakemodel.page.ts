import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-itemmakemodel',
  templateUrl: './itemmakemodel.page.html',
  styleUrls: ['./itemmakemodel.page.scss'],
})
export class ItemmakemodelPage implements OnInit {
  item: ItemMakeAndModel;
  items: any[] = [];

  makes: any[];
  models: any[];
  fuelTypes: any[];
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
  ) {
    this.item = new ItemMakeAndModel();
  }

  ngOnInit() {
    this.onTableRep();
    this.onMake();
    this.onModel();
    this.onFuelType();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemMakeMod()
        .then((mNm: any) => {
          this.items = mNm;
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

  onMake() {
    this.firebaseGetServ.getAssetMakeModMake().then((mNm: any) => {
      this.makes = mNm;
    });
  }
  onMakeLeft() {
    this.firebaseGetServ.getAssetMakeModMakeLeft().then((mNm: any) => {
      this.makes = mNm;
    });
  }

  onModel() {
    this.firebaseGetServ.getAssetMakeModMod().then((mNm: any) => {
      this.models = mNm;
    });
  }
  onModelLeft() {
    this.firebaseGetServ.getAssetMakeModModleft().then((mNm: any) => {
      this.models = mNm;
    });
  }

  onFuelType() {
    this.firebaseGetServ.getFuelType().then((mNm: any) => {
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

  onAdd() {
    this.item.ItemMakModGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
        'Sup_ItemMakMod',
        Object.assign({}, this.item),
        this.item.ItemMakModGuid,
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
