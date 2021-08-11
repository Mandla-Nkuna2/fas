import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import MaintenanceEvent from 'src/app/models/capture/MaintenanceEvent.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-maintaincevent',
  templateUrl: './maintaincevent.page.html',
  styleUrls: ['./maintaincevent.page.scss'],
})
export class MaintainceventPage implements OnInit {
  organization = 'InnTee';
  maintenanceEvent: MaintenanceEvent;
  maintenanceEvents: any[] = [];

  currentDate = new Date();
  jobCardNo: any[];
  registration: any[];
  maintanceType: any[];
  maintanceReason: any[];
  supplier: any[];
  requestedBy: any[];
  costCentre: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.maintenanceEvent = new MaintenanceEvent();
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getMaintEvent(this.organization)
        .then((mNm: any) => {
          this.maintenanceEvents = mNm;
          this.onJobCardNoLeft();
          this.onMaintType();
          this.onCostCentreLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goOilIssues() {
    this.navCtrl.navigateForward('oilissues');
  }

  onJobCardNo() {
    this.firebaseGetServ.getJobCardNos(this.organization).then((staff: any) => {
      this.jobCardNo = staff;
    });
  }
  onJobCardNoLeft() {
    this.firebaseGetServ
      .getJobCardNosLeft(this.organization)
      .then((staff: any) => {
        this.jobCardNo = staff;

        staff.forEach((elm) => {
          this.maintenanceEvents.forEach((obj) => {
            if (elm.JobCardGuid == obj.JobCardGuid) {
              obj.JobCard = elm.JobCardNo;
            }
          });
        });
      });
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

  onMaintType() {
    this.firebaseGetServ.getMaintType(this.organization).then((staff: any) => {
      this.maintanceType = staff;

      staff.forEach((elm) => {
        this.maintenanceEvents.forEach((obj) => {
          if (elm.MaintTypeGuid == obj.MaintTypeGuid) {
            obj.MaintType = elm.MaintType;
          }
        });
      });
    });
  }

  onMaintReason() {
    this.firebaseGetServ
      .getMaintReason(this.organization)
      .then((staff: any) => {
        this.maintanceReason = staff;
      });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplier(this.organization).then((staff: any) => {
      this.supplier = staff;
    });
  }
  onSupplierLeft() {
    this.firebaseGetServ
      .getSupplierLeft(this.organization)
      .then((staff: any) => {
        this.supplier = staff;
      });
  }

  onRequestedBy() {
    this.firebaseGetServ.getStaff(this.organization).then((staff: any) => {
      this.requestedBy = staff;
    });
  }
  onRequestedByLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((staff: any) => {
      this.requestedBy = staff;
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre(this.organization).then((staff: any) => {
      this.costCentre = staff;
    });
  }
  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((staff: any) => {
        this.costCentre = staff;

        staff.forEach((elm) => {
          this.maintenanceEvents.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentGuid) {
              obj.CostCent = elm.CostCentName;
            }
          });
        });
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
      this.onJobCardNo();
      this.onRegistration();
      this.onMaintType();
      this.onMaintReason();
      this.onSupplier();
      this.onRequestedBy();
      this.onCostCentre();
    });
  }

  onAdd() {
    this.maintenanceEvent.MaintEvntGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_MaintEvnt',
        Object.assign({}, this.maintenanceEvent),
        this.maintenanceEvent.MaintEvntGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
