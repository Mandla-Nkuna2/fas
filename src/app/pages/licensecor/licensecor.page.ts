import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import LicCorAndSafInspcDates from 'src/app/models/capture/LicCorAndSafInspcDates.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-licensecor',
  templateUrl: './licensecor.page.html',
  styleUrls: ['./licensecor.page.scss'],
})
export class LicensecorPage implements OnInit {
  organization = 'InnTee';
  licCorAndSafInspec: LicCorAndSafInspcDates;
  licCorAndSafInspecs: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  registration: any[];
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
    this.licCorAndSafInspec = new LicCorAndSafInspcDates();
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
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getLicHistory(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.licCorAndSafInspecs = mNm;

          this.onRegistration();
          this.onCostCentre();
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
        .getLicHistoryNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.licCorAndSafInspecs = mNm;

          this.onRegistration();
          this.onCostCentre();
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
        .getLicHistoryPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.licCorAndSafInspecs = mNm;

          this.onRegistration();
          this.onCostCentre();
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
        .getLicHistoryLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.licCorAndSafInspecs = mNm;

          this.onRegistration();
          this.onCostCentre();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goLossControl() {
    this.navCtrl.navigateForward('main/losscontrol');
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registration = mNm;
      });
  }

  onCostCentre() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
        this.costCentre = mNm;
      });
  }

  onAdd() {
    this.licCorAndSafInspec.LicHistIndex = uuidv4();
    this.licCorAndSafInspec.Capturename = this.returnedUser.UserFirstName;

    if (this.licCorAndSafInspec.Itemguid)
      this.licCorAndSafInspec.RegIndex =
        this.licCorAndSafInspec.Itemguid['Reg'];
    if (this.licCorAndSafInspec.Itemguid)
      this.licCorAndSafInspec.Itemguid =
        this.licCorAndSafInspec.Itemguid['ItemGuid'];
    if (this.licCorAndSafInspec.LicCostCentGuid)
      this.licCorAndSafInspec.LicCostCentGuid =
        this.licCorAndSafInspec.LicCostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_LicHistory',
        Object.assign({}, this.licCorAndSafInspec),
        this.licCorAndSafInspec.LicHistIndex,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.licCorAndSafInspec = new LicCorAndSafInspcDates();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.Itemguid = {
      ItemGuid: item.Itemguid,
      Reg: item.RegIndex,
    };
    this.costCentre.forEach((elm) => {
      if (elm.CostCentGuid == item.LicCostCentGuid) {
        item.LicCostCentGuid = {
          CostCentGuid: item.LicCostCentGuid,
          CostCentName: elm.CostCentName,
        };
      }
    });

    this.licCorAndSafInspec = item;
    this.editBool = true;
  }

  onModify() {
    if (this.licCorAndSafInspec.Itemguid)
      if (this.licCorAndSafInspec.Itemguid['Reg'])
        this.licCorAndSafInspec.RegIndex =
          this.licCorAndSafInspec.Itemguid['Reg'];
    if (this.licCorAndSafInspec.Itemguid)
      if (this.licCorAndSafInspec.Itemguid['ItemGuid'])
        this.licCorAndSafInspec.Itemguid =
          this.licCorAndSafInspec.Itemguid['ItemGuid'];
    if (this.licCorAndSafInspec.LicCostCentGuid)
      if (this.licCorAndSafInspec.LicCostCentGuid['CostCentGuid'])
        this.licCorAndSafInspec.LicCostCentGuid =
          this.licCorAndSafInspec.LicCostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_LicHistory',
        Object.assign({}, this.licCorAndSafInspec),
        this.licCorAndSafInspec.LicHistIndex,
      )
      .then(() => {
        this.editBool = false;
        this.popUp.showToast('Data saved successfully :-)');
        this.licCorAndSafInspec = new LicCorAndSafInspcDates();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
