import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import AutoCard from 'src/app/models/capture/Autocard.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-autocardetails',
  templateUrl: './autocardetails.page.html',
  styleUrls: ['./autocardetails.page.scss'],
})
export class AutocardetailsPage implements OnInit {
  autocard: AutoCard;
  autocards: any[] = [];

  registration: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.autocard = new AutoCard();
  }

  ngOnInit() {
    this.onTableRep();
    this.onRegistration();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAutocards()
        .then((mNm: any) => {
          this.autocards = mNm;
          this.onRegistrationLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
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

      mNm.forEach((elm) => {
        this.autocards.forEach((obj) => {
          if (elm.ItemGuid == obj.ItemGuid) {
            obj.Item = elm.Reg;
          }
        });
      });
    });
  }

  onAdd() {
    this.autocard.AutoCardGuid = uuidv4();

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
