import { Component, OnInit } from '@angular/core';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-staffaudittrail',
  templateUrl: './staffaudittrail.page.html',
  styleUrls: ['./staffaudittrail.page.scss'],
})
export class StaffaudittrailPage implements OnInit {
  staffAuditTrails: any[] = [];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffAuditTrails()
        .then((mNm: any) => {
          this.staffAuditTrails = mNm;
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
