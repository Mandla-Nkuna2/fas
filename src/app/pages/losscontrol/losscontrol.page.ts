import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import LossControl from 'src/app/models/capture/LossControl.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-losscontrol',
  templateUrl: './losscontrol.page.html',
  styleUrls: ['./losscontrol.page.scss'],
})
export class LosscontrolPage implements OnInit {
  organization = 'InnTee';
  lossControl: LossControl;
  lossControls: any[] = [];

  agent: any[];
  registration: any[];
  lossType: any[];
  yesNo = ['Y', 'N'];
  reportedBy: any[];
  driver: any[];
  lossCntrlAction: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.lossControl = new LossControl();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getLossControls(this.organization)
        .then((mNm: any) => {
          this.lossControls = mNm;
          this.onAgentLeft();
          this.onRegistrationLeft();
          this.onLossType();
          this.onDriverNameLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goMEvent() {
    this.navCtrl.navigateForward('maintaincevent');
  }

  onAgent() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.agent = mNm;
    });
  }
  onAgentLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.agent = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.StaffGuid == obj.Agentguid) {
            obj.Agent = elm.StaffCode;
          }
        });
      });
    });
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

        mNm.forEach((elm) => {
          this.lossControls.forEach((obj) => {
            if (elm.ItemGuid == obj.Itemguid) {
              obj.Item = elm.Reg;
            }
          });
        });
      });
  }

  onLossType() {
    this.firebaseGetServ.getLossType(this.organization).then((mNm: any) => {
      this.lossType = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.LossContTypeguid == obj.LossTypeguid) {
            obj.LossType = elm.LossContType;
          }
        });
      });
    });
  }

  onReportedBy() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }
  onReportedByLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }

  onDriverName() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.driver = mNm;
    });
  }
  onDriverNameLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.driver = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.StaffGuid == obj.DriverGuid) {
            obj.Driver = elm.StaffCode;
          }
        });
      });
    });
  }

  onActionTaken() {
    this.firebaseGetServ.getLossCntrlAct(this.organization).then((mNm: any) => {
      this.lossCntrlAction = mNm;
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

      this.onTableRep();
      this.onAgent();
      this.onRegistration();
      this.onLossType();
      this.onReportedBy();
      this.onDriverName();
      this.onActionTaken();
    });
  }

  onAdd() {
    this.lossControl.LossContGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_LossControl',
        Object.assign({}, this.lossControl),
        this.lossControl.LossContGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
