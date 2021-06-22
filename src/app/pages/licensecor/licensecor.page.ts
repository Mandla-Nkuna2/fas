import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import LicCorAndSafInspcDates from 'src/app/models/capture/LicCorAndSafInspcDates.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-licensecor',
  templateUrl: './licensecor.page.html',
  styleUrls: ['./licensecor.page.scss'],
})
export class LicensecorPage implements OnInit {
  licCorAndSafInspec: LicCorAndSafInspcDates;

  registration: any[];
  costCentre: any[];
  yesNo = ['Y', 'N'];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.licCorAndSafInspec = new LicCorAndSafInspcDates();
  }

  ngOnInit() {
    // this.onRegistration()
    // this.onCostCentre()
  }

  goLossControl() {
    this.navCtrl.navigateForward('losscontrol');
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_Licence',
        Object.assign({}, this.licCorAndSafInspec),
        this.licCorAndSafInspec.LicHistIndex,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
