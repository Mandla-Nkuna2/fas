import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-costcentresum',
  templateUrl: './costcentresum.component.html',
  styleUrls: ['./costcentresum.component.scss'],
})
export class CostcentresumComponent implements OnInit {
  organization = 'InnTee';
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  costCentre: any;
  costCentres: any[];

  maintType: any;
  maintTypes = [
    'Additional costs',
    'Fixed costs',
    'Fuel costs',
    'Lic and COF costs',
    'Maintanance costs',
    'Maintance labour costs',
    'Maintance store issues costs',
    'Oil costs',
    'Traffic fine costs',
  ];

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

      this.onCostCentre();
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre(this.organization).then((mNm: any) => {
      this.costCentres = mNm;
    });
  }
}
