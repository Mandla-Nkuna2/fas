import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import {JobCard, GeneralInformation, VehicleInformation} from '../../models/JobCard.model';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})

export class JobcardPage implements OnInit {
  jobCard: JobCard;

  constructor(private firebaseService: FirebaseService, private popUp: PopupHelper) {
    this.jobCard = new JobCard();
    this.jobCard.generalInformation = new GeneralInformation();
    this.jobCard.vehicleInformation = new VehicleInformation();
  }

  ngOnInit() {

  }

  onAdd(){
    this.firebaseService.saveJobCard(this.jobCard).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }
}
