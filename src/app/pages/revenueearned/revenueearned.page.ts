import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
  organization = 'InnTee';
  revenuee: any[] = [];
  clientNames: any[];
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
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
      this.returnedUser = user;

      this.onTableRep();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenue(this.organization)
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
    this.firebaseGetServ.getClient(this.organization).then((staff: any) => {
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
