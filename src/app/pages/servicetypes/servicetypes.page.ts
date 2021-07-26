import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ServiceType from 'src/app/models/supportdata/ServiceType.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-servicetypes',
  templateUrl: './servicetypes.page.html',
  styleUrls: ['./servicetypes.page.scss'],
})
export class ServicetypesPage implements OnInit {
  serviceType: ServiceType;
  serviceTypes: ServiceType[] = [];

  compNames: any[];
  compServType = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.serviceType = new ServiceType();
  }

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceTypes()
        .then((mNm: any) => {
          this.serviceTypes = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onCompServTypeView() {
    this.compServType = !this.compServType;
  }

  onServiceType() {
    this.firebaseGetServ.getServiceType().then((mNm: any) => {
      this.serviceTypes = mNm;
    });
  }

  onComponents() {
    this.firebaseGetServ.getCompName().then((mNm: any) => {
      this.compNames = mNm;
    });
  }
  onComponentsLeft() {
    this.firebaseGetServ.getCompNameLeft().then((mNm: any) => {
      this.compNames = mNm;
    });
  }

  onAdd() {
    this.serviceType.ServTypeGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
        'Sup_ServType',
        Object.assign({}, this.serviceType),
        this.serviceType.ServTypeGuid,
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
