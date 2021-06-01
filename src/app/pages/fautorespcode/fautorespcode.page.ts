import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import FAutoRespCode from 'src/app/models/supportdata/FAutoRespCode.model';

@Component({
  selector: 'app-fautorespcode',
  templateUrl: './fautorespcode.page.html',
  styleUrls: ['./fautorespcode.page.scss'],
})
export class FautorespcodePage implements OnInit {
  fautorespcode: FAutoRespCode;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.fautorespcode = new FAutoRespCode();
  }

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        Object.assign({}, this.fautorespcode),
        this.fautorespcode.ResponseGuid,
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
