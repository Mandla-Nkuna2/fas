import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addissuesinfo',
  templateUrl: './addissuesinfo.page.html',
  styleUrls: ['./addissuesinfo.page.scss'],
})
export class AddissuesinfoPage implements OnInit {
  agent: string;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {}

  onAdd() {
    this.agent = uuidv4();

    this.firebaseService
      .writeData('myTest', '', Object.assign({}, this.agent), '')
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
