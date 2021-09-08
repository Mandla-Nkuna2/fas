import { Router } from '@angular/router';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobCard } from '../../models/capture/JobCard.model';
import { FirebaseGetService } from '../../services/firebase-service/firebase-get.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})
export class JobcardPage implements OnInit {
  organization = 'InnTee';
  @ViewChild('signatureCanvas1', { static: false }) signaturePad1: SignaturePad;
  @ViewChild('signatureCanvas2', { static: false }) signaturePad2: SignaturePad;
  @ViewChild('signatureCanvas3', { static: false }) signaturePad3: SignaturePad;
  jobCard: JobCard;

  returnedUser: any;
  currentDate = new Date();
  loadingComplete = false;
  staff: any = [];
  driver: any[];
  registrations: any[];
  makesAndModels: any[];
  assetTypes: any = [];
  itemComponents: any[] = [];
  assetCompName: any[];
  transmissions = [
    'AUTOMATIC',
    'ELECTRIC',
    'HYDROSTATIC',
    'MANUAL',
    'N/A',
    'PRE SELECT',
    'POWER SHUTTLE',
    'POWERSHIFT',
    'SEMI AUTOMATIC',
  ];
  oilGrades: any[];
  locations: any[];
  serviceTypes: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.jobCard = new JobCard();
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

      this.onReportedBy();
      this.onDriver();
      this.onRegistration();
      this.onMakeAndModel();
      this.onAssetType();
      this.onLocation();
      this.onComponentTable();
      this.onOilGrade();
      this.onServiceTypes();
    });
  }

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 150,
    canvasHeight: 150,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad1.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad2.set('minWidth', 5);
    this.signaturePad3.set('minWidth', 5);
    this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    this.signaturePad2.clear();
    this.signaturePad3.clear();
  }

  onMechSig() {
    let mechanicSig = this.signaturePad1.toDataURL();
    // .substring('data:image/png;base64,'.length);
    this.jobCard.mechanicSignature = mechanicSig;
  }

  onForemanSig() {
    let foremanSig = this.signaturePad2.toDataURL();
    // .substring('data:image/png;base64,'.length);
    this.jobCard.foremanSignature = foremanSig;
  }

  onOperatorSig() {
    let operatorSig = this.signaturePad3.toDataURL();
    // .substring('data:image/png;base64,'.length);
    this.jobCard.operatorSignature = operatorSig;
  }

  onReportedBy() {
    this.firebaseGetServ.getStaff(this.organization).then((staff) => {
      this.staff = staff;
    });
  }
  onReportedByLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((staff) => {
      this.staff = staff;
    });
  }

  onReportedBySel(obj) {
    this.jobCard.StaffGuid = obj.StaffGuid;
  }

  onDriver() {
    this.firebaseGetServ.getStaff(this.organization).then((staff: any) => {
      this.driver = staff;
    });
  }
  onDriverLeft() {
    this.firebaseGetServ.getStaffLeft(this.organization).then((staff: any) => {
      this.driver = staff;
    });
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
        this.registrations = mNm;
      });
  }

  onMakeAndModel() {
    this.firebaseGetServ
      .getAssetMakenModel(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          elm.itemMakMod = elm.ItemMake;
          if (elm.ItemModel) elm.itemMakMod += ' ' + elm.ItemModel;
        });
        this.makesAndModels = mNm;
      });
  }
  onMakeAndModelLeft() {
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          elm.itemMakMod = elm.ItemMake;
          if (elm.ItemModel) elm.itemMakMod += ' ' + elm.ItemModel;
        });
        this.makesAndModels = mNm;
      });
  }

  onAssetType() {
    this.firebaseGetServ.getItemType(this.organization).then((mNm: any) => {
      this.assetTypes = mNm;
      this.onTypeNameLeft();
    });
  }

  onTypeNameLeft() {
    this.firebaseGetServ
      .getAssetTypeNameLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assetTypes.forEach((obj) => {
            if (elm.ItemTypeNameGuid == obj.ItemTypeNameGuid) {
              obj.ItemTypeName = elm.ItemTypeName;
            }
          });
        });
        this.onTypeClassLeft();
      });
  }

  onTypeClassLeft() {
    this.firebaseGetServ
      .getItemTypeClassLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assetTypes.forEach((obj) => {
            if (elm.ItemTypeClassGuid == obj.ItemTypeClassGuid) {
              obj.ItemTypeClass = elm.ItemTypeClass;
            }
          });
        });
        this.onTypeCapacityLeft();
      });
  }

  onTypeCapacityLeft() {
    this.firebaseGetServ
      .getTypeCapacityLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          this.assetTypes.forEach((obj) => {
            if (elm.ItemTypeCapGuid == obj.ItemTypeCapGuid) {
              obj.ItemTypeCap = elm.ItemTypeCap + ' ' + obj.ItemTypeUnit;
            }
          });
        });
        this.onTypeDsplyName();
      });
  }

  onTypeDsplyName() {
    this.assetTypes.forEach((obj) => {
      obj.displayName = obj.ItemTypeName;

      if (obj.ItemTypeClass)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeClass;

      if (obj.ItemTypeCap)
        obj.displayName = obj.displayName + ' / ' + obj.ItemTypeCap;
    });
  }

  onLocation() {
    this.firebaseGetServ.getLocation(this.organization).then((mNm: any) => {
      this.locations = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft(this.organization).then((mNm: any) => {
      this.locations = mNm;
    });
  }

  onComponentTable() {
    this.firebaseRepServ
      .getItemComponents(this.organization)
      .then((mNm: any) => {
        this.itemComponents = mNm;
        this.onCompNameLeft();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddComponent() {
    this.router.navigate(['/main/itemcomponents']);
  }

  onCompName() {
    this.firebaseGetServ.getCompName(this.organization).then((mNm: any) => {
      this.assetCompName = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft(this.organization).then((mNm: any) => {
      this.assetCompName = mNm;

      mNm.forEach((elm) => {
        this.itemComponents.forEach((obj) => {
          if (elm.CompNameGuid == obj.CompNameGuid) {
            obj.CompName = elm.CompName;
          }
        });
      });
    });
  }

  onOilGrade() {
    this.firebaseGetServ.getOilGrade(this.organization).then((mNm: any) => {
      this.oilGrades = mNm;
    });
  }

  onServiceTypes() {
    this.firebaseGetServ.getServiceType(this.organization).then((mNm: any) => {
      this.serviceTypes = mNm;
    });
  }

  onAdd() {
    this.jobCard.JobCardGuid = uuidv4();
    this.jobCard.JobCardNo = uuidv4();
    this.jobCard.CaptureName = this.returnedUser.UserFirstName;

    if (this.jobCard.registrationNo)
      this.jobCard.registrationNo = this.jobCard.registrationNo['ItemGuid'];
    if (this.jobCard.StaffGuid)
      this.jobCard.StaffGuid = this.jobCard.StaffGuid['StaffGuid'];
    if (this.jobCard.driverOrOpGuid)
      this.jobCard.driverOrOpGuid = this.jobCard.driverOrOpGuid['StaffGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_JobCards',
        Object.assign({}, this.jobCard),
        this.jobCard.JobCardNo,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.signaturePad1.clear();
        this.signaturePad2.clear();
        this.signaturePad3.clear();
        this.jobCard = new JobCard();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
