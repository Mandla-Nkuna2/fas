import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Revenue from 'src/app/models/capture/Revenue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.page.html',
  styleUrls: ['./revenue.page.scss'],
})
export class RevenuePage implements OnInit {
  revenue: Revenue;
  revenuee: Revenue[] = [];

  registration: any[];
  clients: any[];
  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.revenue = new Revenue();
  }

  ngOnInit() {
    this.onTableRep();
    this.onRegistration();
    this.onClient();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenue()
        .then((mNm: any) => {
          this.revenuee = mNm;
          this.onClient();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  storeIssue() {
    this.navCtrl.navigateForward('storeissue');
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((staff: any) => {
      this.registration = staff;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((staff: any) => {
      this.registration = staff;
    });
  }

  onClient() {
    this.firebaseGetServ.getClient().then((staff: any) => {
      this.clients = staff;

      staff.forEach((elm) => {
        this.revenuee.forEach((obj) => {
          if (elm.ClientGuid == obj.ClientGuid) {
            obj.ClientGuid = elm.ClientName;
          }
        });
      });
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((staff: any) => {
      this.costCentre = staff;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_Revenue',
        Object.assign({}, this.revenue),
        this.revenue.RevenueGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
