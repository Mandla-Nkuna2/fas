import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import FuelIssue from 'src/app/models/capture/FuelIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-fuelissues',
  templateUrl: './fuelissues.page.html',
  styleUrls: ['./fuelissues.page.scss'],
})
export class FuelissuesPage implements OnInit {
  fuelIssue: FuelIssue;

  registration: any[];
  supplier: any[];
  staffCode: any[];
  costCentre: any[];
  bowser: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.fuelIssue = new FuelIssue();
  }

  ngOnInit() {
    // this.onRegistration()
    // this.onBowser()
    // this.onSupplier()
    // this.onStaffCode()
    // this.onCostCentre()
  }

  goItemCompo() {
    this.navCtrl.navigateForward('itemcomponents');
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

  onBowser() {
    this.firebaseGetServ.getBowser().then((mNm: any) => {
      this.bowser = mNm;
    });
  }
  onBowserLeft() {
    this.firebaseGetServ.getBowserLeft().then((mNm: any) => {
      this.bowser = mNm;
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

  onStaffCode() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm;
    });
  }
  onStaffCodeLeft() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.staffCode = mNm;
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
        Object.assign({}, this.fuelIssue),
        this.fuelIssue.FuelIssueGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
