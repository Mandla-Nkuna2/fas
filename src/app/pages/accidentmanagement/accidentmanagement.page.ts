import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { AccidentManagement } from './../../models/AccidentManagement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accidentmanagement',
  templateUrl: './accidentmanagement.page.html',
  styleUrls: ['./accidentmanagement.page.scss'],
})
export class AccidentmanagementPage implements OnInit {
  accidentManagement: AccidentManagement

  agent: any []

  constructor(private firebaseService: FirebaseService, private popUp: PopupHelper) {
    this.accidentManagement = new AccidentManagement();
   }

  ngOnInit() {
  }

 onAdd(){
  this.firebaseService.saveAccidentManagement(this.accidentManagement).then(() => {
    this.popUp.showAlert('Success', 'Data saved successfully =)')
  }).catch((err) => {
    this.popUp.showError(err);
  })
 }

 onAgent(){}
 onAgentLeft(){}

 onRegistration(){}
 onRegistrationLeft(){}

 onLossType(){}
 onLossTypeLeft(){}

 onDriverName(){}
 onDriverNameLeft(){}

 onTripAuthority(){}
 onTripAuthorityLeft(){}

 onForfeiture(){}
 onForfeitureLeft(){}

 onDetermOfLiab(){}
 onDetermOfLiabLeft(){}

 onCostingDocs(){}
 onCostingDocsLeft(){}

 onActionTaken(){}
 onActionTakenLeft(){}

 onAmountRecov(){}
 onAmountRecovLeft(){}

 onAgentSel(obj){

 }

 onMarkAsComplete(){

 }

}
