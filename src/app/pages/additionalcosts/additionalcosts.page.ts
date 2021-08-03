import { AdditionalCost } from '../../models/capture/AdditionalCost.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-additionalcosts',
  templateUrl: './additionalcosts.page.html',
  styleUrls: ['./additionalcosts.page.scss'],
})
export class AdditionalcostsPage implements OnInit {
  organization = 'InnTee';
  additionalCost: AdditionalCost;
  additionalCosts: any[] = [];

  additionalCostDesc: any[];
  registration: any;
  costCentre: any;
  staffcode: any;
  supplier: any;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.additionalCost = new AdditionalCost();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onRegistration();
    this.onAdditionalCostDesc();
    this.onCostCentre();
    this.onStaffCode();
    this.onSupplier();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAdditionalCosts()
        .then((mNm: any) => {
          this.additionalCosts = mNm;
          this.onAdditionalCostDesc();
          this.onCostCentreLeft();
          this.onSupplierLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goAutoCard() {
    this.navCtrl.navigateForward('autocardetails');
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

  onAdditionalCostDesc() {
    this.firebaseGetServ.getAddittionalCost().then((mNm: any) => {
      this.additionalCostDesc = mNm;

      mNm.forEach((elm) => {
        this.additionalCosts.forEach((obj) => {
          if (elm.AddCostDescGuid == obj.AddCostDescGuid) {
            obj.AddCostDesc = elm.AddCostDesc;
          }
        });
      });
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
    });
  }
  onCostCentreLeft() {
    this.firebaseGetServ.getCostCentreLeft().then((mNm: any) => {
      this.costCentre = mNm;

      mNm.forEach((elm) => {
        this.additionalCosts.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentreGuid) {
            obj.CostCentre = elm.CostCentName;
          }
        });
      });
    });
  }

  onStaffCode() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffcode = mNm;
    });
  }
  onStaffCodeLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.staffcode = mNm;
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier().then((mNm: any) => {
      this.supplier = mNm;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ.getSupplierLeft().then((mNm: any) => {
      this.supplier = mNm;

      mNm.forEach((elm) => {
        this.additionalCosts.forEach((obj) => {
          if (elm.SuppGuid == obj.Suppguid) {
            obj.Supp = elm.SuppName;
          }
        });
      });
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
    this.additionalCost.AddCostGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_AdditionalCosts',
        Object.assign({}, this.additionalCost),
        this.additionalCost.AddCostGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onDelete() {}

  onClear() {}

  onModify() {}
}
