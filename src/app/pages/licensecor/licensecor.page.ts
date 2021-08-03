import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Asset } from 'src/app/models/capture/Asset.model';
import LicCorAndSafInspcDates from 'src/app/models/capture/LicCorAndSafInspcDates.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-licensecor',
  templateUrl: './licensecor.page.html',
  styleUrls: ['./licensecor.page.scss'],
})
export class LicensecorPage implements OnInit {
  organization = 'InnTee';
  licCorAndSafInspec: LicCorAndSafInspcDates;
  licCorAndSafInspecs: any[] = [];

  registration: any[];
  costCentre: any[];
  yesNo = ['Y', 'N'];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.licCorAndSafInspec = new LicCorAndSafInspcDates();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onRegistration();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAsset()
        .then((mNm: any) => {
          this.licCorAndSafInspecs = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
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

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.licCorAndSafInspec.LicHistIndex = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
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
