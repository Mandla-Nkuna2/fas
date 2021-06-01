import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';

@Component({
  selector: 'app-itemmakemodel',
  templateUrl: './itemmakemodel.page.html',
  styleUrls: ['./itemmakemodel.page.scss'],
})
export class ItemmakemodelPage implements OnInit {
  item: ItemMakeAndModel;
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
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.item = new ItemMakeAndModel();
  }

  ngOnInit() {}

  onMake() {
    this.firebaseGetServ.getAssetCompMake().then((mNm: any) => {
      this.makes = mNm;
    });
  }
  onMakeLeft() {
    this.firebaseGetServ.getAssetCompMakeLeft().then((mNm: any) => {
      this.makes = mNm;
    });
  }

  onModel() {
    this.firebaseGetServ.getAssetCompModel().then((mNm: any) => {
      this.models = mNm;
    });
  }
  onModelLeft() {
    this.firebaseGetServ.getAssetCompModelLeft().then((mNm: any) => {
      this.models = mNm;
    });
  }

  onFuelType() {
    this.firebaseGetServ.getFuelType().then((mNm: any) => {
      this.fuelTypes = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.item, this.item.ItemMakModGuid)
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
