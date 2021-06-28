import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import AutoCard from 'src/app/models/capture/Autocard.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-autocardetails',
  templateUrl: './autocardetails.page.html',
  styleUrls: ['./autocardetails.page.scss'],
})
export class AutocardetailsPage implements OnInit {
  autocard: AutoCard;

  registration: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.autocard = new AutoCard();
  }

  ngOnInit() {
    this.onRegistration();
  }

  goBrowserTransactions() {
    this.navCtrl.navigateForward('browsertransactions');
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_Autocard',
        Object.assign({}, this.autocard),
        this.autocard.AutoCardGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
