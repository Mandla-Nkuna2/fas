import { Component, OnInit } from '@angular/core';
import {JobCard, GeneralInformation, VehicleInformation} from '../../models/JobCard.model';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})

export class JobcardPage implements OnInit {
  jobCard: JobCard;

  constructor() {
    this.jobCard = new JobCard();
    this.jobCard.generalInformation = new GeneralInformation();
    this.jobCard.vehicleInformation = new VehicleInformation();
  }

  ngOnInit() {

  }
}
