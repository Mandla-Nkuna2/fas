import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-repairhistory',
  templateUrl: './repairhistory.page.html',
  styleUrls: ['./repairhistory.page.scss'],
})
export class RepairhistoryPage implements OnInit {
  vehicleReps: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemComponents()
        .then((mNm: any) => {
          this.vehicleReps = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goDetail() {
    this.navCtrl.navigateForward('repairhistorydetail');
  }
}
