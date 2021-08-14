import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oilsupppurch',
  templateUrl: './oilsupppurch.component.html',
  styleUrls: ['./oilsupppurch.component.scss'],
})
export class OilsupppurchComponent implements OnInit {
  organization = 'InnTee';
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  supplier: any;
  suppliers: any[];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {}

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

      this.onSupplier();
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier(this.organization).then((mNm: any) => {
      this.suppliers = mNm;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.suppliers = mNm;
    });
  }
}
