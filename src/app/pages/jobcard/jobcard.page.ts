import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Component, OnInit } from '@angular/core';
import {JobCard, GeneralInformation, VehicleInformation} from '../../models/JobCard.model';
import {FirebaseGetService} from '../../services/firebase-service/firebase-get.service'; 
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})

export class JobcardPage implements OnInit {
  jobCard: JobCard;
  oilGrades: any = [];
  oilMakes: any = [];
  loadingComplete = false
  constructor(
    private firebaseService: FirebaseService, 
    private popUp: PopupHelper,
    private firebaseGet: FirebaseGetService
    ) {
    this.jobCard = new JobCard();
    this.jobCard.generalInformation = new GeneralInformation();
    this.jobCard.vehicleInformation = new VehicleInformation();
  }

  ngOnInit() {
    this.getData();
  }

  onAdd(){
    this.firebaseService.saveJobCard(this.jobCard).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }
  getData() {
    this.popUp.showLoading('getting data...').then(() =>  {
      this.firebaseGet.getOilGrade().then((oilGrades) => {
        this.oilGrades = oilGrades;
        this.firebaseGet.getOilMake().then((oilMakes) =>  {
          this.oilMakes = oilMakes;
          this.loadingComplete = true;
          this.popUp.dismissLoading();
        })
      })
    })
  }
}
