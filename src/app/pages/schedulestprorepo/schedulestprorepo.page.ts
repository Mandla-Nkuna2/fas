import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-schedulestprorepo',
  templateUrl: './schedulestprorepo.page.html',
  styleUrls: ['./schedulestprorepo.page.scss'],
})
export class SchedulestprorepoPage implements OnInit {
  organization = 'InnTee';
  schStProRep: any[] = [];

  costCentre: any[];
  staffCodes: any[];
  registrations: any[];
  maintReasons: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {}

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

      this.onTableRep();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getStaffProdTime(this.organization)
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
    this.firebaseGetServ.getStaffLeft(this.organization).then((staff: any) => {
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
    this.firebaseRepServ
      .getMaintEventLeft(this.organization)
      .then((staff: any) => {
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
    this.firebaseGetServ
      .getMaintReason(this.organization)
      .then((staff: any) => {
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
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((staff: any) => {
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
