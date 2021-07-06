import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import LossControl from 'src/app/models/capture/LossControl.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-losscontrol',
  templateUrl: './losscontrol.page.html',
  styleUrls: ['./losscontrol.page.scss'],
})
export class LosscontrolPage implements OnInit {
  lossControl: LossControl;
  lossControls: LossControl[];

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
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.lossControl = new LossControl();
  }

  ngOnInit() {
    //this.onTableRep();
    // this.onAgent();
    // this.onRegistration();
    // this.onLossType();
    // this.onReportedBy();
    // this.onDriverName();
    // this.onActionTaken();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getLossControls()
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
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.agent = mNm;
    });
  }
  onAgentLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.agent = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.StaffGuid == obj.Agentguid) {
            obj.Agentguid = elm.StaffCode;
          }
        });
      });
    });
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.ItemGuid == obj.Itemguid) {
            obj.Itemguid = elm.Reg;
          }
        });
      });
    });
  }

  onLossType() {
    this.firebaseGetServ.getLossType().then((mNm: any) => {
      this.lossType = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.LossContTypeguid == obj.LossTypeguid) {
            obj.LossTypeguid = elm.LossContType;
          }
        });
      });
    });
  }

  onReportedBy() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }
  onReportedByLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.reportedBy = mNm;
    });
  }

  onDriverName() {
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.driver = mNm;
    });
  }
  onDriverNameLeft() {
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.driver = mNm;

      mNm.forEach((elm) => {
        this.lossControls.forEach((obj) => {
          if (elm.StaffGuid == obj.DriverGuid) {
            obj.DriverGuid = elm.StaffCode;
          }
        });
      });
    });
  }

  onActionTaken() {
    this.firebaseGetServ.getLossCntrlAct().then((mNm: any) => {
      this.lossCntrlAction = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
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
