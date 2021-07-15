import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-bowserledger',
  templateUrl: './bowserledger.component.html',
  styleUrls: ['./bowserledger.component.scss'],
})
export class BowserledgerComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  locOrReg: any;

  bowser: any;
  bowsers: any[];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onBowser();
  }

  onBowser() {
    this.firebaseGetServ.getBowser().then((mNm: any) => {
      this.bowsers = mNm;
    });
  }
}
