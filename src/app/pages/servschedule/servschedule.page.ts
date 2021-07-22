import { Component, OnInit } from '@angular/core';
import ServiceSchedule from 'src/app/models/supportdata/ServiceSchedule.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
@Component({
  selector: 'app-servschedule',
  templateUrl: './servschedule.page.html',
  styleUrls: ['./servschedule.page.scss'],
})
export class ServschedulePage implements OnInit {
  servschedule: ServiceSchedule;
  servschedules: ServiceSchedule[] = [];

  itemMakModels: any[];
  serviceTypes: any[];
  itemMakModel: any;
  serviceType: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.servschedule = new ServiceSchedule();
  }

  ngOnInit() {
    //this.onTableRep();
    this.onMakModel();
    this.onServiceType();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getServiceScheduleTasks()
        .then((mNm: any) => {
          this.servschedules = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onMakModel() {
    this.firebaseGetServ.getAssetMakenModel().then((mNm: any) => {
      this.itemMakModels = mNm;
    });
  }
  onMakModelLeft() {
    this.firebaseGetServ.getAssetMakenModelLeft().then((mNm: any) => {
      this.itemMakModels = mNm;
    });
  }

  onServiceType() {
    this.firebaseGetServ.getServiceType().then((mNm: any) => {
      this.serviceTypes = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_ServScheduleHistory',
        Object.assign({}, this.servschedule),
        this.servschedule.id,
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
