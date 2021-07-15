import { Component, OnInit } from '@angular/core';
import OilType from 'src/app/models/supportdata/OilType.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';

@Component({
  selector: 'app-oiltype',
  templateUrl: './oiltype.page.html',
  styleUrls: ['./oiltype.page.scss'],
})
export class OiltypePage implements OnInit {
  oilType: OilType;
  oilMake: any[];
  oilGrade: any[];
  oilClass: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oilType = new OilType();
  }

  ngOnInit() {
    this.onOilMake();
    this.onOilGrade();
    this.onOilClass();
  }

  onOilMake() {
    this.firebaseGetServ.getOilMake().then((mNm: any) => {
      this.oilMake = mNm;
    });
  }

  onOilGrade() {
    this.firebaseGetServ.getOilGrade().then((mNm: any) => {
      this.oilGrade = mNm;
    });
  }

  onOilClass() {
    this.firebaseGetServ.getOilClass().then((mNm: any) => {
      this.oilClass = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Sup_Oiltype',
        Object.assign({}, this.oilType),
        this.oilType.OilGuid,
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
