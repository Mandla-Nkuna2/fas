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

  currentDate = new Date();
  returnedUser: any;
  supplier: any[];
  editBool = false;

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
        .getSupplierDeposits(this.organization)
        .then((mNm: any) => {
          this.supplierDeposits = mNm;
          this.onSupplierName();
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
    this.navCtrl.navigateForward('main/fuelnoilprice');
  }

  onSupplierName() {
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

  onAdd() {
    this.supplierDeposit.SupBalguid = uuidv4();
    this.supplierDeposit.Capturename = this.returnedUser.UserFirstName;

    if (this.supplierDeposit.SuppGuid)
      this.supplierDeposit.SuppGuid = this.supplierDeposit.SuppGuid['SuppGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_SuppBalance',
        Object.assign({}, this.supplierDeposit),
        this.supplierDeposit.SupBalguid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.supplierDeposit = new SupplierDeposit();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.SuppGuid = {
      SuppGuid: item.SuppGuid,
      SuppName: item.Supp,
    };

    this.supplierDeposit = item;
    this.editBool = true;
  }

  onModify() {
    if (this.supplierDeposit.SuppGuid)
      if (this.supplierDeposit.SuppGuid['SuppGuid'])
        this.supplierDeposit.SuppGuid =
          this.supplierDeposit.SuppGuid['SuppGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_SuppBalance',
        Object.assign({}, this.supplierDeposit),
        this.supplierDeposit.SupBalguid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.supplierDeposit = new SupplierDeposit();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
