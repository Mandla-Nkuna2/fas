import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import Revenue from 'src/app/models/capture/Revenue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.page.html',
  styleUrls: ['./revenue.page.scss'],
})
export class RevenuePage implements OnInit {
  organization: string;
  revenue: Revenue;
  revenuee: any[] = [];

  currentDate = new Date();
  registration: any[];
  clients: any[];
  costCentre: any[];
  returnedUser: any;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.revenue = new Revenue();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenue(this.organization)
        .then((mNm: any) => {
          this.revenuee = mNm;
          this.onClient();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  storeIssue() {
    this.navCtrl.navigateForward('storeissue');
  }

  onRegistration() {
    this.firebaseGetServ
      .getRegistration(this.organization)
      .then((staff: any) => {
        this.registration = staff;
      });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((staff: any) => {
        this.registration = staff;
      });
  }

  onClient() {
    this.firebaseGetServ.getClient(this.organization).then((staff: any) => {
      this.clients = staff;

      staff.forEach((elm) => {
        this.revenuee.forEach((obj) => {
          if (elm.ClientGuid == obj.ClientGuid) {
            obj.Client = elm.ClientName;
          }
        });
      });
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre(this.organization).then((staff: any) => {
      this.costCentre = staff;
    });
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
      this.onRegistration();
      this.onClient();
      this.onCostCentre();
    });
  }

  onAdd() {
    this.revenue.RevenueGuid = uuidv4();
    this.revenue.CaptureName = this.returnedUser.UserFirstName;

    if (this.revenue.ItemGuid)
      this.revenue.ItemGuid = this.revenue.ItemGuid['ItemGuid'];
    if (this.revenue.ClientGuid)
      this.revenue.ClientGuid = this.revenue.ClientGuid['ClientGuid'];
    if (this.revenue.CostCentguid)
      this.revenue.CostCentguid = this.revenue.CostCentguid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Revenue',
        Object.assign({}, this.revenue),
        this.revenue.RevenueGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.revenue = new Revenue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
