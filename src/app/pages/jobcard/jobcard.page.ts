import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  JobCard,
  GeneralInformation,
  VehicleInformation,
  ServiceInformation,
  ComponentOfCar,
  WorkDone_MechanicsReport,
} from '../../models/capture/JobCard.model';
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
  @ViewChild('signatureCanvas', { static: false }) signaturePad: SignaturePad;

  jobCard: JobCard;
  loadingComplete = false;
  staff: any = [];
  driver: any[];

  mechanicSig = '';
  foremanSig = '';
  operatorSig = '';

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.jobCard = new JobCard();
    this.jobCard.generalInformation = Object.assign(
      {},
      new GeneralInformation(),
    );
    this.jobCard.vehicleInformation = Object.assign(
      {},
      new VehicleInformation(),
    );
    this.jobCard.serviceInformation = Object.assign(
      {},
      new ServiceInformation(),
    );
    this.jobCard.serviceInformation.componentOfCar = Object.assign(
      {},
      new ComponentOfCar(),
    );
    this.jobCard.serviceInformation.workDone_MechanicsReport = Object.assign(
      {},
      new WorkDone_MechanicsReport(),
    );
  }

  ngOnInit() {
    this.getCurentUser();
    this.onReportedBy();
    this.onDriver();
  }

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 150,
    canvasHeight: 150,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  onMechSig() {
    this.mechanicSig = this.signaturePad.toDataURL();
    // .substring('data:image/png;base64,'.length);
    this.jobCard.serviceInformation.workDone_MechanicsReport.mechanicSignature =
      this.mechanicSig;
  }

  onForemanSig() {
    this.foremanSig = this.signaturePad.toDataURL();
    // .substring('data:image/png;base64,'.length);
    this.jobCard.serviceInformation.workDone_MechanicsReport.foremanSignature =
      this.foremanSig;
  }

  onOperatorSig() {
    this.operatorSig = this.signaturePad.toDataURL();
    // .substring('data:image/png;base64,'.length);
    this.jobCard.serviceInformation.workDone_MechanicsReport.operatorSignature =
      this.operatorSig;
  }

  onReportedBy() {
    this.firebaseGetServ.getStaff().then((staff) => {
      this.staff = staff;
    });
  }
  onReportedByLeft() {
    this.firebaseGetServ.getStaffLeft().then((staff) => {
      this.staff = staff;
    });
  }

  onReportedBySel(obj) {
    this.jobCard.generalInformation.StaffGuid = obj.StaffGuid;
  }

  onDriver() {
    this.firebaseGetServ.getStaff().then((staff: any) => {
      this.driver = staff;
    });
  }
  onDriverLeft() {
    this.firebaseGetServ.getStaffLeft().then((staff: any) => {
      this.driver = staff;
    });
  }

  onChange() {}

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.jobCard.generalInformation.JobCardNo = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_JobCards',
        Object.assign({}, this.jobCard),
        this.jobCard.generalInformation.JobCardNo,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
