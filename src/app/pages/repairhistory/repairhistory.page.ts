import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

const apiUrl =
  'https://us-central1-fleet-administration-system.cloudfunctions.net/';

@Component({
  selector: 'app-repairhistory',
  templateUrl: './repairhistory.page.html',
  styleUrls: ['./repairhistory.page.scss'],
})
export class RepairhistoryPage implements OnInit {
  organization = 'InnTee';
  vehicleReps: any = [];
  currentDate = new Date();
  returnedUser: any;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
    private http: HttpClient,
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

      this.onTableRep();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getMaintEvent(this.organization)
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
    this.navCtrl.navigateForward('main/repairhistorydetail');
  }
}
