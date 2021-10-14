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
  returnedUser: any;
  registration: any[];
  clients: any[];
  costCentre: any[];
  yesNo = ['Y', 'N'];
  editBool = false;
  tblNext = true;
  tblPrev = true;

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
      this.onCostCentre();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenue(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.revenuee = mNm;
          this.onClient();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenueNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.revenuee = mNm;
          this.onClient();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenuePrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.revenuee = mNm;
          this.onClient();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getRevenueLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.revenuee = mNm;
          this.onClient();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  storeIssue() {
    this.navCtrl.navigateForward('main/storeissue');
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

  onTotalRev() {
    let ttlRev = 0;
    let rev =
      this.revenue.NoHours * this.revenue.HourRate +
      this.revenue.NoOvertime * this.revenue.OvertimeRate +
      this.revenue.NoWeekend * this.revenue.WeekendRate +
      this.revenue.NoRain * this.revenue.RainRate +
      this.revenue.StandbyHours * this.revenue.StandbyRate +
      this.revenue.NoDays * this.revenue.DailyRate +
      +this.revenue.OtherRevenue -
      this.revenue.Deductions;

    let disc = (rev / 100) * this.revenue.Discount;
    ttlRev = rev - disc;
    let vat = (ttlRev / 100) * this.revenue.Vat;
    if (this.revenue.IncVat == 'Y') ttlRev += vat;
    this.revenue.Total = ttlRev;
  }

  onAdd() {
    this.revenue.RevenueGuid = uuidv4();
    this.revenue.CaptureName = this.returnedUser.UserFirstName;

    if (this.revenue.ItemGuid)
      this.revenue.RegIndex = this.revenue.ItemGuid['Reg'];
    if (this.revenue.ItemGuid)
      this.revenue.ItemGuid = this.revenue.ItemGuid['ItemGuid'];
    if (this.revenue.ClientGuid)
      this.revenue.ClientGuid = this.revenue.ClientGuid['ClientGuid'];
    if (this.revenue.CostCentguid)
      this.revenue.CostCentguid = this.revenue.CostCentguid['CostCentGuid'];

    this.onTotalRev();
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

  onEdit(item) {
    item.ItemGuid = {
      ItemGuid: item.ItemGuid,
      Reg: item.RegIndex,
    };
    item.ClientGuid = {
      ClientGuid: item.ClientGuid,
      ClientName: item.Client,
    };

    this.costCentre.forEach((elm) => {
      if (elm.CostCentGuid == item.CostCentguid) {
        item.CostCentguid = {
          CostCentGuid: item.CostCentguid,
          CostCentName: elm.CostCentName,
        };
      }
    });

    this.revenue = item;
    this.editBool = true;
  }

  onModify() {
    if (this.revenue.ItemGuid)
      if (this.revenue.ItemGuid['Reg'])
        this.revenue.RegIndex = this.revenue.ItemGuid['Reg'];
    if (this.revenue.ItemGuid)
      if (this.revenue.ItemGuid['ItemGuid'])
        this.revenue.ItemGuid = this.revenue.ItemGuid['ItemGuid'];
    if (this.revenue.ClientGuid)
      if (this.revenue.ClientGuid['ClientGuid'])
        this.revenue.ClientGuid = this.revenue.ClientGuid['ClientGuid'];
    if (this.revenue.CostCentguid)
      if (this.revenue.CostCentguid['CostCentGuid'])
        this.revenue.CostCentguid = this.revenue.CostCentguid['CostCentGuid'];

    this.onTotalRev();
    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Revenue',
        Object.assign({}, this.revenue),
        this.revenue.RevenueGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.revenue = new Revenue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
