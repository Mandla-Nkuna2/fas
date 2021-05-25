import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
@Component({
  selector: 'app-servschedule',
  templateUrl: './servschedule.page.html',
  styleUrls: ['./servschedule.page.scss'],
})
export class ServschedulePage implements OnInit {
  servschedule: any;
  itemMakModels: any[];
  serviceTypes: any[];
  itemMakModel: any;
  serviceType: any;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onMakModel() {
    this.firebaseGetServ.getMakeAndModel().then((mNm: any) => {
      this.itemMakModels = mNm;
    });
  }
  onMakModelLeft() {
    this.firebaseGetServ.getMakeAndModelLeft().then((mNm: any) => {
      this.itemMakModels = mNm;
    });
  }

  onServiceType() {
    this.firebaseGetServ.getServiceType().then((mNm: any) => {
      this.serviceTypes = mNm;
    });
  }

  onAdd() {}
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
