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

  currentDate = new Date();
  agent: any[];
  registration: any[];
  lossType: any[];
  yesNo = ['Y', 'N'];
  reportedBy: any[];
  driver: any[];
  lossCntrlAction: any[];
  returnedUser: any;

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
      this.returnedUser = user;

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
    this.lossControl.Capturename = this.returnedUser.UserFirstName;

    let count = 0;
    this.lossControls.forEach((elm) => {
      count = elm.LossControlNo;
    });
    this.lossControl.LossControlNo = count + 1;

    if (this.lossControl.Agentguid)
      this.lossControl.Agentguid = this.lossControl.Agentguid['StaffGuid'];
    if (this.lossControl.Itemguid)
      this.lossControl.Itemguid = this.lossControl.Itemguid['ItemGuid'];
    if (this.lossControl.LossTypeguid)
      this.lossControl.LossTypeguid =
        this.lossControl.LossTypeguid['LossContTypeguid'];
    if (this.lossControl.Reportbyguid)
      this.lossControl.Reportbyguid =
        this.lossControl.Reportbyguid['StaffGuid'];
    if (this.lossControl.DriverGuid)
      this.lossControl.DriverGuid = this.lossControl.DriverGuid['StaffGuid'];
    if (this.lossControl.LossContActguid)
      this.lossControl.LossContActguid =
        this.lossControl.LossContActguid['LossContActGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_LossControl',
        Object.assign({}, this.lossControl),
        this.lossControl.LossContGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.lossControl = new LossControl();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
