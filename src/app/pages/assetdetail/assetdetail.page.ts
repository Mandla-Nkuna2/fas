import { FirebaseReportService } from './../../services/firebase-service/firebase-report.service';
import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.page.html',
  styleUrls: ['./assetdetail.page.scss'],
})
export class AssetdetailPage implements OnInit {
  moreDet = false;
  assets: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getAsset()
        .then((mNm: any) => {
          this.assets = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
}
