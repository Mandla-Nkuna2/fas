import { AdditionalCost } from '../../models/capture/AdditionalCost.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';

@Component({
  selector: 'app-additionalcosts',
  templateUrl: './additionalcosts.page.html',
  styleUrls: ['./additionalcosts.page.scss'],
})
export class AdditionalcostsPage implements OnInit {
  additionalCost: AdditionalCost;

  additionalCostDesc: any[];
  registration: any;
  costCentre: any;
  staffcode: any;
  supplier: any;

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.additionalCost = new AdditionalCost();
  }

  ngOnInit() {
    // this.onRegistration();
    // this.onAdditionalCostDesc();
    // this.onCostCentre();
    // this.onStaffCode();
    // this.onSupplier();
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
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
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
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
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
