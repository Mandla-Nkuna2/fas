import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ServiceType from 'src/app/models/supportdata/ServiceType.model';

@Component({
  selector: 'app-servicetypes',
  templateUrl: './servicetypes.page.html',
  styleUrls: ['./servicetypes.page.scss'],
})
export class ServicetypesPage implements OnInit {
  serviceType: ServiceType;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.serviceType, this.serviceType.ServTypeGuid)
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
