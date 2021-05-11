import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Trafficfine } from './../../models/Trafficfine.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafficfine',
  templateUrl: './trafficfine.page.html',
  styleUrls: ['./trafficfine.page.scss'],
})
export class TrafficfinePage implements OnInit {
  trafficfine: Trafficfine

  supervisor: any []

  constructor(private firebaseService: FirebaseService, private popUp: PopupHelper) {
    this.trafficfine = new Trafficfine();
  }

  ngOnInit() {
  }

  onSupervisor(){}
  onSupervisorLeft(){}

  onRegistration(){}
  onRegistrationLeft(){}

  onDriver(){}
  onDriverLeft(){}

  onSupervisorSel(obj){

  }

  onAdd(){
    this.firebaseService.saveTrafficfine(this.trafficfine).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err);
    })
  }

  onMarkAsComplete(){

  }

}
