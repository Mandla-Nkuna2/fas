import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  organization = 'InnTee';
  autocard: AutoCard;
  autocards: any[] = [];
  currentDate = new Date();

  registration: any[];
  returnedUser: any;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.autocard = new AutoCard();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAutocards(this.organization)
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
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
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

  getCurrentUser() {
    this.afAuth.user.subscribe((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
      this.returnedUser = user;

      this.onTableRep();
      this.onRegistration();
    });
  }

  onAdd() {
    this.autocard.AutoCardGuid = uuidv4();
    this.autocard.CaptureName = this.returnedUser.UserFirstName;
    if (this.autocard.ItemGuid)
      this.autocard.ItemGuid = this.autocard.ItemGuid['ItemGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Autocard',
        Object.assign({}, this.autocard),
        this.autocard.AutoCardGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.autocard = new AutoCard();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
