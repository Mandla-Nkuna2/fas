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
  maintEvnt: MaintenanceEvent;
  maintEvnts: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  jobCardNo: any[];
  registration: any[];
  maintanceType: any[];
  maintanceReason: any[];
  supplier: any[];
  requestedBy: any[];
  costCentre: any[];
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
    this.maintEvnt = new MaintenanceEvent();
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
      this.getMaintEvntCount();
      this.onRegistration();
      this.onMaintReason();
      this.onSupplier();
      this.onRequestedBy();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getMaintEvent(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.maintEvnts = mNm;

          this.onJobCardNoLeft();
          this.onMaintType();
          this.onCostCentreLeft();
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
        .getMaintEventNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.maintEvnts = mNm;

          this.onJobCardNoLeft();
          this.onMaintType();
          this.onCostCentreLeft();
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
        .getMaintEventPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.maintEvnts = mNm;

          this.onJobCardNoLeft();
          this.onMaintType();
          this.onCostCentreLeft();
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
        .getMaintEventLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.maintEvnts = mNm;

          this.onJobCardNoLeft();
          this.onMaintType();
          this.onCostCentreLeft();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goOilIssues() {
    this.navCtrl.navigateForward('main/oilissues');
  }

  getMaintEvntCount() {
    let c = 0;
    this.firebaseRepServ
      .getDocsCount(this.organization, 'Trn_MaintEvnt')
      .then((mNm: number) => {
        c = mNm;
        this.maintEvnt.RefNo = 'REF00' + (c + 1);
      });
  }

  onJobCardNoLeft() {
    this.firebaseGetServ
      .getJobCardNosLeft(this.organization)
      .then((staff: any) => {
        this.jobCardNo = staff;

        staff.forEach((elm) => {
          this.maintEvnts.forEach((obj) => {
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
        this.maintEvnts.forEach((obj) => {
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

  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((staff: any) => {
        this.costCentre = staff;

        staff.forEach((elm) => {
          this.maintEvnts.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentGuid) {
              obj.CostCent = elm.CostCentName;
            }
          });
        });
      });
  }

  onAdd() {
    this.maintEvnt.MaintEvntGuid = uuidv4();
    this.maintEvnt.CaptureName = this.returnedUser.UserFirstName;

    if (this.maintEvnt.JobCardGuid)
      this.maintEvnt.JobCardGuid = this.maintEvnt.JobCardGuid['JobCardGuid'];
    if (this.maintEvnt.ItemGuid)
      this.maintEvnt.RegIndex = this.maintEvnt.ItemGuid['Reg'];
    if (this.maintEvnt.ItemGuid)
      this.maintEvnt.ItemGuid = this.maintEvnt.ItemGuid['ItemGuid'];
    if (this.maintEvnt.MaintTypeGuid)
      this.maintEvnt.MaintTypeGuid =
        this.maintEvnt.MaintTypeGuid['MaintTypeGuid'];
    if (this.maintEvnt.MaintReasonGuid)
      this.maintEvnt.MaintReasonGuid =
        this.maintEvnt.MaintReasonGuid['MaintReasonGuid'];
    if (this.maintEvnt.SuppGuid)
      this.maintEvnt.SuppGuid = this.maintEvnt.SuppGuid['SuppGuid'];
    if (this.maintEvnt.RequestByGuid)
      this.maintEvnt.RequestByGuid = this.maintEvnt.RequestByGuid['StaffGuid'];
    if (this.maintEvnt.CostCentGuid)
      this.maintEvnt.CostCentGuid = this.maintEvnt.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_MaintEvnt',
        Object.assign({}, this.maintEvnt),
        this.maintEvnt.MaintEvntGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.maintEvnt = new MaintenanceEvent();
        this.getMaintEvntCount();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    console.log(item);
    item.ItemGuid = {
      ItemGuid: item.ItemGuid,
      Reg: item.RegIndex,
    };
    item.JobCardGuid = {
      JobCardGuid: item.JobCardGuid,
      JobCardNo: item.JobCard,
    };
    item.MaintTypeGuid = {
      MaintTypeGuid: item.MaintTypeGuid,
      MaintType: item.MaintType,
    };
    item.CostCentGuid = {
      CostCentGuid: item.CostCentGuid,
      CostCentName: item.CostCent,
    };

    this.maintanceReason.forEach((elm) => {
      if (elm.MaintReasonGuid == item.MaintReasonGuid) {
        item.MaintReasonGuid = {
          MaintReasonGuid: item.MaintReasonGuid,
          MaintReason: elm.MaintReason,
        };
      }
    });
    this.supplier.forEach((elm) => {
      if (elm.SuppGuid == item.SuppGuid) {
        item.SuppGuid = {
          SuppGuid: item.SuppGuid,
          SuppName: elm.SuppName,
        };
      }
    });
    this.requestedBy.forEach((elm) => {
      if (elm.StaffGuid == item.RequestByGuid) {
        item.RequestByGuid = {
          StaffGuid: item.RequestByGuid,
          StaffCode: elm.StaffCode,
        };
      }
    });

    this.maintEvnt = item;
    this.editBool = true;
  }

  onModify() {
    if (this.maintEvnt.JobCardGuid)
      if (this.maintEvnt.JobCardGuid['JobCardGuid'])
        this.maintEvnt.JobCardGuid = this.maintEvnt.JobCardGuid['JobCardGuid'];
    if (this.maintEvnt.ItemGuid)
      if (this.maintEvnt.ItemGuid['Reg'])
        this.maintEvnt.RegIndex = this.maintEvnt.ItemGuid['Reg'];
    if (this.maintEvnt.ItemGuid)
      if (this.maintEvnt.ItemGuid['ItemGuid'])
        this.maintEvnt.ItemGuid = this.maintEvnt.ItemGuid['ItemGuid'];
    if (this.maintEvnt.MaintTypeGuid)
      if (this.maintEvnt.MaintTypeGuid['MaintTypeGuid'])
        this.maintEvnt.MaintTypeGuid =
          this.maintEvnt.MaintTypeGuid['MaintTypeGuid'];
    if (this.maintEvnt.MaintReasonGuid)
      if (this.maintEvnt.MaintReasonGuid['MaintReasonGuid'])
        this.maintEvnt.MaintReasonGuid =
          this.maintEvnt.MaintReasonGuid['MaintReasonGuid'];
    if (this.maintEvnt.SuppGuid)
      if (this.maintEvnt.SuppGuid['SuppGuid'])
        this.maintEvnt.SuppGuid = this.maintEvnt.SuppGuid['SuppGuid'];
    if (this.maintEvnt.RequestByGuid)
      if (this.maintEvnt.RequestByGuid['StaffGuid'])
        this.maintEvnt.RequestByGuid =
          this.maintEvnt.RequestByGuid['StaffGuid'];
    if (this.maintEvnt.CostCentGuid)
      if (this.maintEvnt.CostCentGuid['CostCentGuid'])
        this.maintEvnt.CostCentGuid =
          this.maintEvnt.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_MaintEvnt',
        Object.assign({}, this.maintEvnt),
        this.maintEvnt.MaintEvntGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.maintEvnt = new MaintenanceEvent();
        this.getMaintEvntCount();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
