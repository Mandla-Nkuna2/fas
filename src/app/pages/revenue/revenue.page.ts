import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Revenue from 'src/app/models/capture/Revenue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.page.html',
  styleUrls: ['./revenue.page.scss'],
})
export class RevenuePage implements OnInit {
  revenue: Revenue;

  registration: any[];
  client: any[];
  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.revenue = new Revenue();
  }

  ngOnInit() {
    // this.onRegistration()
    // this.onClient();
    // this.onCostCentre()
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
      this.client = staff;
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
