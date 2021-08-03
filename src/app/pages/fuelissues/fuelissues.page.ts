import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import FuelIssue from 'src/app/models/capture/FuelIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fuelissues',
  templateUrl: './fuelissues.page.html',
  styleUrls: ['./fuelissues.page.scss'],
})
export class FuelissuesPage implements OnInit {
  organization = 'InnTee';
  fuelIssue: FuelIssue;
  fuelIssues: any[] = [];

  registration: any[];
  supplier: any[];
  staffCode: any[];
  costCentre: any[];
  bowser: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.fuelIssue = new FuelIssue();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onRegistration();
    this.onBowser();
    this.onSupplier();
    this.onStaffCode();
    this.onCostCentre();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFuelIssues()
        .then((mNm: any) => {
          this.fuelIssues = mNm;
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

      mNm.forEach((elm) => {
        this.fuelIssues.forEach((obj) => {
          if (elm.SuppGuid == obj.SupplierGuid) {
            obj.Supp = elm.SuppName;
          }
        });
      });
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
    this.fuelIssue.FuelIssueGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_FuelIssue',
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
