import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-schedulestprorepo',
  templateUrl: './schedulestprorepo.page.html',
  styleUrls: ['./schedulestprorepo.page.scss'],
})
export class SchedulestprorepoPage implements OnInit {
  schStProRep: any[] = [];

  costCentre: any[];
  staffCodes: any[];
  registrations: any[];
  maintReasons: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffProdTime()
        .then((mNm: any) => {
          this.schStProRep = mNm;
          this.onStaff();
          this.onRegistrationLeft();
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

  onStaff() {
    this.firebaseGetServ.getStaffLeft().then((staff: any) => {
      this.staffCodes = staff;

      staff.forEach((elm) => {
        this.schStProRep.forEach((obj) => {
          if (elm.StaffGuid == obj.StaffGuid) {
            obj.Staff = elm.StaffCode;
          }
        });
      });
    });
  }

  onRegistrationLeft() {
    this.firebaseRepServ.getMaintEventLeft().then((staff: any) => {
      this.registrations = staff;

      staff.forEach((elm) => {
        this.schStProRep.forEach((obj) => {
          if (elm.MaintEvntGuid == obj.MaintEvntGuid) {
            obj.reg = elm.RegIndex;
            obj.maintReason = elm.MaintReasonGuid;
            obj.refNo = elm.RefNo;
          }
        });
      });

      this.onMaintReason();
    });
  }

  onMaintReason() {
    this.firebaseGetServ.getMaintReason().then((staff: any) => {
      this.maintReasons = staff;

      staff.forEach((elm) => {
        this.schStProRep.forEach((obj) => {
          if (elm.MaintReasonGuid == obj.maintReason) {
            obj.maintReason = elm.MaintReason;
          }
        });
      });
    });
  }

  onCostCentreLeft() {
    this.firebaseGetServ.getCostCentreLeft().then((staff: any) => {
      this.costCentre = staff;

      staff.forEach((elm) => {
        this.schStProRep.forEach((obj) => {
          if (elm.CostCentGuid == obj.CostCentGuid) {
            obj.CostCent = elm.CostCentName;
          }
        });
      });
    });
  }
}
