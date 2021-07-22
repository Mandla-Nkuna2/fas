import { Component, OnInit } from '@angular/core';
import Revenue from 'src/app/models/capture/Revenue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-revenueearned',
  templateUrl: './revenueearned.page.html',
  styleUrls: ['./revenueearned.page.scss'],
})
export class RevenueearnedPage implements OnInit {
  revenuee: any[] = [];
  clientNames: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenue()
        .then((mNm: any) => {
          this.revenuee = mNm;
          this.onClientName();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onClientName() {
    this.firebaseGetServ.getClient().then((staff: any) => {
      this.clientNames = staff;

      staff.forEach((elm) => {
        this.revenuee.forEach((obj) => {
          if (elm.ClientGuid == obj.ClientGuid) {
            obj.Client = elm.ClientName;
          }
        });
      });
    });
  }
}
