import { Component, OnInit } from '@angular/core';
import Oiltype from 'src/app/models/supportdata/OilType.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';

@Component({
  selector: 'app-oiltype',
  templateUrl: './oiltype.page.html',
  styleUrls: ['./oiltype.page.scss'],
})
export class OiltypePage implements OnInit {
  oilType: Oiltype;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.oilType, this.oilType.OilGuid)
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully =)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
