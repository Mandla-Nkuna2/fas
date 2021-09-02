import OilType from 'src/app/models/supportdata/OilType.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import SupplierCategory from 'src/app/models/supportdata/SupplierCategory.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import OilMake from 'src/app/models/supportdata/OilMake.model';
import OilGrade from 'src/app/models/supportdata/OilGrade.model';
import OilClass from 'src/app/models/supportdata/OilClass.model';

@Component({
  selector: 'app-addsupportdatainfo',
  templateUrl: './addsupportdatainfo.page.html',
  styleUrls: ['./addsupportdatainfo.page.scss'],
})
export class AddsupportdatainfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  oilType: OilType;
  oilTypes: any[] = [];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];
  suppCat: SupplierCategory;
  oilMake: OilMake;
  oilGrade: OilGrade;
  oilClass: OilClass;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    public afAuth: AngularFireAuth,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {
    this.suppCat = new SupplierCategory();
    this.oilType = new OilType();
    this.oilMake = new OilMake();
    this.oilGrade = new OilGrade();
    this.oilClass = new OilClass();
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
      this.onOilTypes();
    });
  }

  onOilTypes() {
    this.firebaseRepServ.getOiltypes(this.organization).then((mNm: any) => {
      this.oilTypes = mNm;
      this.onOilMake();
      this.onOilGrade();
      this.onOilClass();
    });
  }

  onOilMake() {
    this.firebaseGetServ.getOilMake(this.organization).then((mNm: any) => {
      this.oilMakes = mNm;

      mNm.forEach((elm) => {
        this.oilTypes.forEach((obj) => {
          if (elm.OilMakeGuid == obj.OilMakeGuid) {
            obj.oilMake = elm.OilMake;
          }
        });
      });
    });
  }

  onOilGrade() {
    this.firebaseGetServ.getOilGrade(this.organization).then((mNm: any) => {
      this.oilGrades = mNm;

      mNm.forEach((elm) => {
        this.oilTypes.forEach((obj) => {
          if (elm.OilGradeGuid == obj.OilGradeGuid) {
            obj.oilGrade = elm.OilGrade;
          }
        });
      });
    });
  }

  onOilClass() {
    this.firebaseGetServ.getOilClass(this.organization).then((mNm: any) => {
      this.oilClasses = mNm;

      mNm.forEach((elm) => {
        this.oilTypes.forEach((obj) => {
          if (elm.OilClassGuid == obj.OilClassGuid) {
            obj.OilClass = elm.OilClass;
          }
        });
      });
    });
  }

  AddOilMake() {
    this.oilMake.OilMakeGuid = uuidv4();
    this.oilMake.CapName = this.returnedUser.UserFirstName;
    this.oilMake.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_OilMake',
        Object.assign({}, this.oilMake),
        this.oilMake.OilMakeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.oilMake = new OilMake();
        this.onOilMake();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  AddOilGrade() {
    this.oilGrade.OilGradeGuid = uuidv4();
    this.oilGrade.CapName = this.returnedUser.UserFirstName;
    this.oilGrade.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_OilGrade',
        Object.assign({}, this.oilGrade),
        this.oilGrade.OilGradeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.oilGrade = new OilGrade();
        this.onOilGrade();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  AddOilClass() {
    this.oilClass.OilClassGuid = uuidv4();
    this.oilClass.CapName = this.returnedUser.UserFirstName;
    this.oilClass.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_OilClass',
        Object.assign({}, this.oilClass),
        this.oilClass.OilClassGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.oilClass = new OilClass();
        this.onOilClass();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  AddSuppCat() {
    this.suppCat.SuppCategoryGuid = uuidv4();
    this.suppCat.CapName = this.returnedUser.UserFirstName;
    this.suppCat.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_SupplierCategory',
        Object.assign({}, this.suppCat),
        this.suppCat.SuppCategoryGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.suppCat = new SupplierCategory();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  AddOilType() {
    this.oilType.OilGuid = uuidv4();
    this.oilType.CapName = this.returnedUser.UserFirstName;

    if (this.oilType.OilMakeGuid)
      this.oilType.OilMakeGuid = this.oilType.OilMakeGuid['OilMakeGuid'];
    if (this.oilType.OilGradeGuid)
      this.oilType.OilGradeGuid = this.oilType.OilGradeGuid['OilGradeGuid'];
    if (this.oilType.OilClassGuid)
      this.oilType.OilClassGuid = this.oilType.OilClassGuid['OilClassGuid'];

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_Oiltype',
        Object.assign({}, this.oilType),
        this.oilType.OilGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.oilType = new OilType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
