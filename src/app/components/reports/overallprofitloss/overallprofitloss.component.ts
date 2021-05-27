import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-overallprofitloss',
  templateUrl: './overallprofitloss.component.html',
  styleUrls: ['./overallprofitloss.component.scss'],
})
export class OverallprofitlossComponent implements OnInit {
  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {}
}
