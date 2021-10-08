import DailyOperationRec from 'src/app/models/capture/DailyOperationRec.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dailyoperationrecord',
  templateUrl: './dailyoperationrecord.page.html',
  styleUrls: ['./dailyoperationrecord.page.scss'],
})
export class DailyoperationrecordPage implements OnInit {
  organization = 'InnTee';
  dOpsRec: DailyOperationRec;
  dailyOpRecs: any[] = [];

  returnedUser: any;
  currentDate = new Date();
  registration: any[];
  location: any[];
  costCentre: any[];
  operator: any[];
  typeUnits = [
    'cc',
    'cfm',
    'kg',
    'kVA',
    'KW',
    'l/hr',
    'litres',
    'm³',
    'seats',
    'ton',
  ];
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.dOpsRec = new DailyOperationRec();
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
      this.onLocation();
      this.onOperatorName();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getDailyOperations(this.organization)
        .then((mNm: any) => {
          this.dailyOpRecs = mNm;
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

  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registration = mNm;

        mNm.forEach((elm) => {
          this.dailyOpRecs.forEach((obj) => {
            if (elm.ItemGuid == obj.Itemguid) {
              obj.Item = elm.Reg;
            }
          });
        });
      });
  }

  onLocation() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      this.location = mNm;
    });
  }

  onCostCentreLeft() {
    this.firebaseGetServ
      .getCostCentreLeft(this.organization)
      .then((mNm: any) => {
        this.costCentre = mNm;

        mNm.forEach((elm) => {
          this.dailyOpRecs.forEach((obj) => {
            if (elm.CostCentGuid == obj.CostCentreguid) {
              obj.CostCentre = elm.CostCentName;
            }
          });
        });
      });
  }

  onOperatorName() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.operator = mNm;
    });
  }
  onOperatorNameLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((mNm: any) => {
      this.operator = mNm;
    });
  }

  onAdd() {
    this.dOpsRec.PlantSheetguid = uuidv4();
    this.dOpsRec.CaptureName = this.returnedUser.UserFirstName;

    if (this.dOpsRec.OpenOdo && this.dOpsRec.CloseOdo)
      this.dOpsRec.CalWrkKmHr = this.dOpsRec.CloseOdo - this.dOpsRec.OpenOdo;
    if (this.dOpsRec.Itemguid)
      this.dOpsRec.Itemguid = this.dOpsRec.Itemguid['ItemGuid'];
    if (this.dOpsRec.LocItemCode)
      this.dOpsRec.LocItemCode = this.dOpsRec.LocItemCode['LocItemCode'];
    if (this.dOpsRec.CostCentreguid)
      this.dOpsRec.CostCentreguid = this.dOpsRec.CostCentreguid['CostCentGuid'];
    if (this.dOpsRec.StaffGuid)
      this.dOpsRec.StaffGuid = this.dOpsRec.StaffGuid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_PlantSheets',
        Object.assign({}, this.dOpsRec),
        this.dOpsRec.PlantSheetguid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.dOpsRec = new DailyOperationRec();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.Itemguid = {
      ItemGuid: item.Itemguid,
      Reg: item.Item,
    };
    item.CostCentreguid = {
      CostCentGuid: item.CostCentreguid,
      CostCentName: item.CostCentre,
    };

    this.location.forEach((elm) => {
      if (elm.LocItemCode == item.LocItemCode) {
        item.LocItemCode = {
          LocItemCode: item.LocItemCode,
          LocDesc: elm.LocDesc,
        };
      }
    });
    this.operator.forEach((elm) => {
      if (elm.StaffGuid == item.StaffGuid) {
        item.StaffGuid = {
          StaffGuid: item.StaffGuid,
          StaffCode: elm.StaffCode,
        };
      }
    });

    this.dOpsRec = item;
    this.editBool = true;
  }

  onModify() {
    if (this.dOpsRec.OpenOdo && this.dOpsRec.CloseOdo)
      this.dOpsRec.CalWrkKmHr = this.dOpsRec.CloseOdo - this.dOpsRec.OpenOdo;
    if (this.dOpsRec.Itemguid)
      if (this.dOpsRec.Itemguid['ItemGuid'])
        this.dOpsRec.Itemguid = this.dOpsRec.Itemguid['ItemGuid'];
    if (this.dOpsRec.LocItemCode)
      if (this.dOpsRec.LocItemCode['LocItemCode'])
        this.dOpsRec.LocItemCode = this.dOpsRec.LocItemCode['LocItemCode'];
    if (this.dOpsRec.CostCentreguid)
      if (this.dOpsRec.CostCentreguid['CostCentGuid'])
        this.dOpsRec.CostCentreguid =
          this.dOpsRec.CostCentreguid['CostCentGuid'];
    if (this.dOpsRec.StaffGuid)
      if (this.dOpsRec.StaffGuid['StaffGuid'])
        this.dOpsRec.StaffGuid = this.dOpsRec.StaffGuid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_PlantSheets',
        Object.assign({}, this.dOpsRec),
        this.dOpsRec.PlantSheetguid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.dOpsRec = new DailyOperationRec();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
