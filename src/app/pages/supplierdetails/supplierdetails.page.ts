import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import SupplierDetails from 'src/app/models/supportdata/SupplierDetails.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.page.html',
  styleUrls: ['./supplierdetails.page.scss'],
})
export class SupplierdetailsPage implements OnInit {
  supplier: SupplierDetails;
  suppliers: any[] = [];

  suppCat: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.supplier = new SupplierDetails();
  }

  ngOnInit() {
    this.onTableRep();
    this.onCategory();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getSuppliers()
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
    this.firebaseGetServ.getSuppCat().then((mNm: any) => {
      this.suppCat = mNm;
    });
  }
  onCategoryLeft() {
    this.firebaseGetServ.getSuppCatLeft().then((mNm: any) => {
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

  onAdd() {
    this.supplier.SuppGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
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
