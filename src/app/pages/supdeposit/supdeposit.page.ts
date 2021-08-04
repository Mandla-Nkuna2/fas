import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import SupplierDeposit from 'src/app/models/capture/SupplierDeposit.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-supdeposit',
  templateUrl: './supdeposit.page.html',
  styleUrls: ['./supdeposit.page.scss'],
})
export class SupdepositPage implements OnInit {
  organization = 'InnTee';
  supplierDeposit: SupplierDeposit;
  supplierDeposits: any[];

  supplier: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.supplierDeposit = new SupplierDeposit();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getSupplierDeposits(this.organization)
        .then((mNm: any) => {
          this.supplierDeposits = mNm;
          this.onSupplierNameLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goFuelnOilPrice() {
    this.navCtrl.navigateForward('fuelnoilprice');
  }

  onSupplierName() {
    this.firebaseGetServ.getSupplier(this.organization).then((mNm: any) => {
      this.supplier = mNm;
    });
  }
  onSupplierNameLeft() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.supplier = mNm;

      mNm.forEach((elm) => {
        this.supplierDeposits.forEach((obj) => {
          if (elm.SuppGuid == obj.SuppGuid) {
            obj.Supp = elm.SuppName;
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

      this.onTableRep();
      this.onSupplierName();
    });
  }

  onAdd() {
    this.supplierDeposit.SupBalguid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_SuppBalance',
        Object.assign({}, this.supplierDeposit),
        this.supplierDeposit.SupBalguid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
