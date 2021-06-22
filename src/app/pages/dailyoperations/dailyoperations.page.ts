import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import DailyOperationRec from 'src/app/models/capture/DailyOperationRec.model';

@Component({
  selector: 'app-dailyoperations',
  templateUrl: './dailyoperations.page.html',
  styleUrls: ['./dailyoperations.page.scss'],
})
export class DailyoperationsPage implements OnInit {
  dailyOpRec: DailyOperationRec;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.dailyOpRec = new DailyOperationRec();
  }

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_PlantSheets',
        this.dailyOpRec,
        this.dailyOpRec.Itemguid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
