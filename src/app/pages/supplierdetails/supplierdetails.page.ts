import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import SupplierDetails from 'src/app/models/supportdata/SupplierDetails.model';
@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.page.html',
  styleUrls: ['./supplierdetails.page.scss'],
})
export class SupplierdetailsPage implements OnInit {
  supplier: SupplierDetails;
  suppCat: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.supplier = new SupplierDetails();
  }

  ngOnInit() {
    // this.onCategory();
  }

  onCategory() {
    this.firebaseGetServ.getSuppCat().then((mNm: any) => {
      this.suppCat = mNm;
    });
  }
  onCategoryLeft() {
    this.firebaseGetServ.getSuppCatLeft().then((mNm: any) => {
      this.suppCat = mNm;
    });
  }

  onAdd() {
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
