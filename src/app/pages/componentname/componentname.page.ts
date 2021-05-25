import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ComponentName from 'src/app/models/supportdata/ComponentName.model';

@Component({
  selector: 'app-componentname',
  templateUrl: './componentname.page.html',
  styleUrls: ['./componentname.page.scss'],
})
export class ComponentnamePage implements OnInit {
  componentName: ComponentName;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.componentName = new ComponentName();
  }

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.componentName, this.componentName.CompNameGuid)
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
