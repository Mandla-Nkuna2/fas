import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import OverheadBudget from 'src/app/models/supportdata/OverheadBudget.model';

@Component({
  selector: 'app-overheadbudget',
  templateUrl: './overheadbudget.page.html',
  styleUrls: ['./overheadbudget.page.scss'],
})
export class OverheadbudgetPage implements OnInit {
  oheadbudget: OverheadBudget;
  ohbTypes: any[];
  finYear = ['2020', '2021', '2022', '2023'];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.oheadbudget = new OverheadBudget();
  }

  ngOnInit() {}

  onOhbType() {
    //  this.firebaseGetServ.getOhbTypes().then((mNm: any) => {
    //    this.ohbTypes = mNm;
    //  });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        Object.assign({}, this.oheadbudget),
        this.oheadbudget.OverheadBudGuid,
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
