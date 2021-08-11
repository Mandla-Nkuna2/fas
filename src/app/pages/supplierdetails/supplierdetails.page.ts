import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import SupplierDetails from 'src/app/models/supportdata/SupplierDetails.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.page.html',
  styleUrls: ['./supplierdetails.page.scss'],
})
export class SupplierdetailsPage implements OnInit {
  organization = 'InnTee';
  supplier: SupplierDetails;
  suppliers: any[] = [];

  currentDate = new Date();
  suppCat: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.supplier = new SupplierDetails();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getSuppliers(this.organization)
        .then((mNm: any) => {
          this.suppliers = mNm;
          this.onCategoryLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onCategory() {
    this.firebaseGetServ.getSuppCat(this.organization).then((mNm: any) => {
      this.suppCat = mNm;
    });
  }
  onCategoryLeft() {
    this.firebaseGetServ.getSuppCatLeft(this.organization).then((mNm: any) => {
      this.suppCat = mNm;

      mNm.forEach((elm) => {
        this.suppliers.forEach((obj) => {
          if (elm.SuppCategoryGuid == obj.SuppCategoryGuid) {
            obj.SuppCategory = elm.SuppCategory;
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
      this.onCategory();
    });
  }

  onAdd() {
    this.supplier.SuppGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_Supplier',
        Object.assign({}, this.supplier),
        this.supplier.SuppGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
