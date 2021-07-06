import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-oilstoreledger',
  templateUrl: './oilstoreledger.component.html',
  styleUrls: ['./oilstoreledger.component.scss'],
})
export class OilstoreledgerComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  oilStore: any;
  oilStores: any['ads'];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onOilStore();
  }

  onOilStore() {
    this.firebaseGetServ.getOilStore().then((mNm: any) => {
      this.oilStores = mNm;
    });
  }
}
