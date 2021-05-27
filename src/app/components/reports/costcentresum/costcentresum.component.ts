import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-costcentresum',
  templateUrl: './costcentresum.component.html',
  styleUrls: ['./costcentresum.component.scss'],
})
export class CostcentresumComponent implements OnInit {
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
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onCostCentre();
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentres = mNm;
    });
  }
}
