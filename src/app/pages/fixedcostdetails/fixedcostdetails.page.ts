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

  fixedCostType: any[];
  registration: any[];
  calcPeriod = ['Annum', 'Monthly'];

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
    this.getCurentUser();
    this.onTableRep();
    this.onFixedCostType();
    this.onRegistraion();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFixedCostDetails()
        .then((mNm: any) => {
          this.fixedCosts = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goTransfer() {
    this.navCtrl.navigateForward('fixedcostransfer');
  }

  onFixedCostType() {
    this.firebaseGetServ.getFixedCostType().then((mNm: any) => {
      this.fixedCostType = mNm;
    });
  }

  onRegistraion() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistraionLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;
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
    this.fixedCost.FixedCostGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_FixedCosts',
        Object.assign({}, this.fixedCost),
        this.fixedCost.FixedCostGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
