import { Component, OnInit } from '@angular/core';
import ServiceTask from 'src/app/models/supportdata/ServiceTask.model';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-servschedultask',
  templateUrl: './servschedultask.page.html',
  styleUrls: ['./servschedultask.page.scss'],
})
export class ServschedultaskPage implements OnInit {
  serviceSchTask: ServiceTask;
  servSchTaskDesc: any;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.serviceSchTask = new ServiceTask();
  }

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_ServScheduleHistory',
        Object.assign({}, this.serviceSchTask),
        this.serviceSchTask.id,
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
