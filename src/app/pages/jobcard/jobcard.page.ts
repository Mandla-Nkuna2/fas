import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {JobCard, GeneralInformation, VehicleInformation, ServiceInformation, ComponentOfCar} from '../../models/JobCard.model';
import {FirebaseGetService} from '../../services/firebase-service/firebase-get.service';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})

export class JobcardPage implements OnInit {
  @ViewChild('signatureCanvas', { static: false }) signaturePad: SignaturePad;

  jobCard: JobCard;
  loadingComplete = false;
  staffGuids: any = [];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService
    ) {
    this.jobCard = new JobCard();
    this.jobCard.generalInformation = new GeneralInformation();
    this.jobCard.vehicleInformation = new VehicleInformation();
    this.jobCard.serviceInformation = new ServiceInformation();
    this.jobCard.serviceInformation.componentOfCar = new ComponentOfCar();
  }

  ngOnInit() {
    //this.onStaff();
  }

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 150,
    'canvasHeight': 150
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  onAdd(){
    this.firebaseService.saveJobCard(this.jobCard).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }

  onStaff(){
    this.firebaseGetServ.getStaffGuid().then((staffGuids) => {
      this.staffGuids = staffGuids
    })
  }

  onChange(){

  }
}
