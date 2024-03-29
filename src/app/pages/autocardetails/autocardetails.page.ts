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
  returnedUser: any;
  registration: any[];
  yesNo = ['Y', 'N'];
  editBool = false;
  tblNext = true;
  tblPrev = true;

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
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAutocards(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.autocards = mNm;
          this.onRegistration();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAutocardsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.autocards = mNm;
          this.onRegistration();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAutocardsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.autocards = mNm;
          this.onRegistration();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAutocardsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.autocards = mNm;
          this.onRegistration();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goBrowserTransactions() {
    this.navCtrl.navigateForward('main/browsertransactions');
  }

  onRegistration() {
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

  onEdit(item) {
    item.ItemGuid = {
      ItemGuid: item.ItemGuid,
      Reg: item.Item,
    };

    this.autocard = item;
    this.editBool = true;
  }

  onModify() {
    if (this.autocard.ItemGuid)
      if (this.autocard.ItemGuid['ItemGuid'])
        this.autocard.ItemGuid = this.autocard.ItemGuid['ItemGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Autocard',
        Object.assign({}, this.autocard),
        this.autocard.AutoCardGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.autocard = new AutoCard();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
