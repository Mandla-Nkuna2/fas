import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import FuelIssue from 'src/app/models/capture/FuelIssue.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fuelissues',
  templateUrl: './fuelissues.page.html',
  styleUrls: ['./fuelissues.page.scss'],
})
export class FuelissuesPage implements OnInit {
  organization = 'InnTee';
  fuelIssue: FuelIssue;
  fuelIssues: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  registration: any[];
  supplier: any[];
  staffCode: any[];
  costCentre: any[];
  bowser: any[];
  editBool = false;

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.fuelIssue = new FuelIssue();
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
      this.onRegistration();
      this.onBowser();
      this.onStaffCode();
      this.onCostCentre();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFuelIssues(this.organization)
        .then((mNm: any) => {
          this.fuelIssues = mNm;
          this.onSupplier();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goItemCompo() {
    this.navCtrl.navigateForward('main/itemcomponents');
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

  onBowser() {
    this.firebaseGetServ.getBowser(this.organization).then((mNm: any) => {
      this.bowser = mNm;
    });
  }
  onBowserLeft() {
    this.firebaseGetServ.getBowserLeft(this.organization).then((mNm: any) => {
      this.bowser = mNm;
    });
  }

  onSupplier() {
    this.firebaseGetServ.getSupplierLeft(this.organization).then((mNm: any) => {
      this.supplier = mNm;

      mNm.forEach((elm) => {
        this.fuelIssues.forEach((obj) => {
          if (elm.SuppGuid == obj.SupplierGuid) {
            obj.Supp = elm.SuppName;
          }
        });
      });
    });
  }

  onStaffCode() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.staffCode = mNm;
    });
  }
  onStaffCodeLeft() {
    this.firebaseGetServ.getStaff(this.organization).then((mNm: any) => {
      this.staffCode = mNm;
    });
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre(this.organization).then((mNm: any) => {
      this.costCentre = mNm;
    });
  }

  onAdd() {
    this.fuelIssue.FuelIssueGuid = uuidv4();
    this.fuelIssue.CaptureName = this.returnedUser.UserFirstName;

    if (this.fuelIssue.ItemGuid) {
      this.fuelIssue.RegIndex = this.fuelIssue.ItemGuid['Reg'];
      this.fuelIssue.ItemGuid = this.fuelIssue.ItemGuid['ItemGuid'];
    }
    if (this.fuelIssue.BowserGuid)
      this.fuelIssue.BowserGuid = this.fuelIssue.BowserGuid['BowserGuid'];
    if (this.fuelIssue.SupplierGuid)
      this.fuelIssue.SupplierGuid = this.fuelIssue.SupplierGuid['SuppGuid'];
    if (this.fuelIssue.StaffGuid)
      this.fuelIssue.StaffGuid = this.fuelIssue.StaffGuid['StaffGuid'];
    if (this.fuelIssue.CostCentGuid)
      this.fuelIssue.CostCentGuid = this.fuelIssue.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_FuelIssue',
        Object.assign({}, this.fuelIssue),
        this.fuelIssue.FuelIssueGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fuelIssue = new FuelIssue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    item.ItemGuid = {
      ItemGuid: item.ItemGuid,
      Reg: item.RegIndex,
    };
    item.SupplierGuid = {
      SuppGuid: item.SupplierGuid,
      SuppName: item.Supp,
    };

    this.bowser.forEach((elm) => {
      if (elm.BowserGuid == item.BowserGuid) {
        item.BowserGuid = {
          BowserGuid: item.BowserGuid,
          BowserName: elm.BowserName,
        };
      }
    });
    this.staffCode.forEach((elm) => {
      if (elm.StaffGuid == item.StaffGuid) {
        item.StaffGuid = {
          StaffGuid: item.StaffGuid,
          StaffCode: elm.StaffCode,
        };
      }
    });
    this.costCentre.forEach((elm) => {
      if (elm.CostCentGuid == item.CostCentGuid) {
        item.CostCentGuid = {
          CostCentGuid: item.CostCentGuid,
          CostCentName: elm.CostCentName,
        };
      }
    });

    this.fuelIssue = item;
    this.editBool = true;
  }

  onModify() {
    if (this.fuelIssue.ItemGuid)
      if (this.fuelIssue.ItemGuid['Reg'])
        this.fuelIssue.RegIndex = this.fuelIssue.ItemGuid['Reg'];
    if (this.fuelIssue.ItemGuid)
      if (this.fuelIssue.ItemGuid['ItemGuid'])
        this.fuelIssue.ItemGuid = this.fuelIssue.ItemGuid['ItemGuid'];
    if (this.fuelIssue.BowserGuid)
      if (this.fuelIssue.BowserGuid['BowserGuid'])
        this.fuelIssue.BowserGuid = this.fuelIssue.BowserGuid['BowserGuid'];
    if (this.fuelIssue.SupplierGuid)
      if (this.fuelIssue.SupplierGuid['SuppGuid'])
        this.fuelIssue.SupplierGuid = this.fuelIssue.SupplierGuid['SuppGuid'];
    if (this.fuelIssue.StaffGuid)
      if (this.fuelIssue.StaffGuid['StaffGuid'])
        this.fuelIssue.StaffGuid = this.fuelIssue.StaffGuid['StaffGuid'];
    if (this.fuelIssue.CostCentGuid)
      if (this.fuelIssue.CostCentGuid['CostCentGuid'])
        this.fuelIssue.CostCentGuid =
          this.fuelIssue.CostCentGuid['CostCentGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_FuelIssue',
        Object.assign({}, this.fuelIssue),
        this.fuelIssue.FuelIssueGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fuelIssue = new FuelIssue();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
