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
  returnedUser: any;
  agent: any[];
  registration: any[];
  lossType: any[];
  yesNo = ['Y', 'N'];
  reportedBy: any[];
  driver: any[];
  lossCntrlAction: any[];
  editBool = false;
  tblNext = true;
  tblPrev = true;

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
      this.onReportedBy();
      this.onActionTaken();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getLossControls(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.lossControls = mNm;

          this.onLossContNo();
          this.onAgentLeft();
          this.onRegistrationLeft();
          this.onLossType();
          this.onDriverNameLeft();
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
        .getLossControlsNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.lossControls = mNm;

          this.onLossContNo();
          this.onAgentLeft();
          this.onRegistrationLeft();
          this.onLossType();
          this.onDriverNameLeft();
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
        .getLossControlsPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.lossControls = mNm;

          this.onLossContNo();
          this.onAgentLeft();
          this.onRegistrationLeft();
          this.onLossType();
          this.onDriverNameLeft();
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
        .getLossControlsLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.lossControls = mNm;

          this.onLossContNo();
          this.onAgentLeft();
          this.onRegistrationLeft();
          this.onLossType();
          this.onDriverNameLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onLossContNo() {
    this.firebaseRepServ.getLossCtrlCt(this.organization).then((mNm: any) => {
      this.lossControl.LossControlNo = mNm + 1;
    });
  }

  goMEvent() {
    this.navCtrl.navigateForward('main/maintaincevent');
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

  onAdd() {
    this.lossControl.LossContGuid = uuidv4();
    this.lossControl.Capturename = this.returnedUser.UserFirstName;

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
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.lossControl = new LossControl();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.Agentguid = {
      Agentguid: item.Agentguid,
      StaffCode: item.Agent,
    };
    item.Itemguid = {
      ItemGuid: item.Itemguid,
      Reg: item.Item,
    };
    item.LossTypeguid = {
      LossTypeguid: item.LossTypeguid,
      LossContType: item.LossType,
    };
    item.DriverGuid = {
      DriverGuid: item.DriverGuid,
      StaffCode: item.Driver,
    };

    this.reportedBy.forEach((elm) => {
      if (elm.StaffGuid == item.Reportbyguid)
        item.Reportbyguid = {
          StaffGuid: item.Reportbyguid,
          StaffCode: elm.StaffCode,
        };
    });
    this.lossCntrlAction.forEach((elm) => {
      if (elm.LossContActGuid == item.LossContActguid)
        item.LossContActguid = {
          LossContActguid: item.LossContActguid,
          LossContAct: elm.LossContAct,
        };
    });

    this.lossControl = item;
    this.editBool = true;
  }

  onModify() {
    if (this.lossControl.Agentguid)
      if (this.lossControl.Agentguid['StaffGuid'])
        this.lossControl.Agentguid = this.lossControl.Agentguid['StaffGuid'];
    if (this.lossControl.Itemguid)
      if (this.lossControl.Itemguid['ItemGuid'])
        this.lossControl.Itemguid = this.lossControl.Itemguid['ItemGuid'];
    if (this.lossControl.LossTypeguid)
      if (this.lossControl.LossTypeguid['LossContTypeguid'])
        this.lossControl.LossTypeguid =
          this.lossControl.LossTypeguid['LossContTypeguid'];
    if (this.lossControl.Reportbyguid)
      if (this.lossControl.Reportbyguid['StaffGuid'])
        this.lossControl.Reportbyguid =
          this.lossControl.Reportbyguid['StaffGuid'];
    if (this.lossControl.DriverGuid)
      if (this.lossControl.DriverGuid['StaffGuid'])
        this.lossControl.DriverGuid = this.lossControl.DriverGuid['StaffGuid'];
    if (this.lossControl.LossContActguid)
      if (this.lossControl.LossContActguid['LossContActGuid'])
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
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.lossControl = new LossControl();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
