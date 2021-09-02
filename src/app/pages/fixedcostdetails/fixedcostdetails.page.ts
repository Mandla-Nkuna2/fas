import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import FixedCostsDet from 'src/app/models/capture/FixedCostsDet.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fixedcostdetails',
  templateUrl: './fixedcostdetails.page.html',
  styleUrls: ['./fixedcostdetails.page.scss'],
})
export class FixedcostdetailsPage implements OnInit {
  organization = 'InnTee';
  fixedCost: FixedCostsDet;
  fixedCosts: any[] = [];
  items: any[] = [];

  fixedCostType: any[];
  currentDate = new Date();
  registration: any[];
  calcPeriod = ['Annum', 'Monthly'];
  returnedUser: any;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.fixedCost = new FixedCostsDet();
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
      this.onFixedCostType();
      this.onRegistration();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFixedCostDetails(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          this.fixedCosts = mNm;
          this.onRegistrationLeft();
          this.onFixedCostType();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
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
          this.fixedCosts.forEach((obj) => {
            if (obj.ItemGuid == elm.ItemGuid) {
              obj.Item = elm.Reg;
            }
          });
        });
      });
  }

  onFixedCostType() {
    this.firebaseGetServ
      .getFixedCostType(this.organization)
      .then((mNm: any) => {
        this.fixedCostType = mNm;
      });
  }

  goTransfer() {
    this.navCtrl.navigateForward('fixedcostransfer');
  }

  onAdd() {
    this.fixedCost.FixedCostGuid = uuidv4();
    this.fixedCost.CaptureName = this.returnedUser.UserFirstName;

    if (this.fixedCost.FixedCostType)
      this.fixedCost.FixedCostType =
        this.fixedCost.FixedCostType['FixedCostType'];
    if (this.fixedCost.ItemGuid)
      this.fixedCost.ItemGuid = this.fixedCost.ItemGuid['ItemGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_FixedCosts',
        Object.assign({}, this.fixedCost),
        this.fixedCost.FixedCostGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fixedCost = new FixedCostsDet();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
