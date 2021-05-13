import { Operator } from './../../models/DailyOperationRec.model';
import DailyOperationRec from 'src/app/models/DailyOperationRec.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';

@Component({
  selector: 'app-dailyoperationrecord',
  templateUrl: './dailyoperationrecord.page.html',
  styleUrls: ['./dailyoperationrecord.page.scss'],
})
export class DailyoperationrecordPage implements OnInit {
  dOpsRec: DailyOperationRec

  registration: any []
  location: any []
  costCentre: any []
  operator: any []

  constructor(private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.dOpsRec = new DailyOperationRec()
    this.dOpsRec.operator = new Operator()
   }

  ngOnInit() {
    // this.onRegistration()
    //this.onLocation()
    // this.onCostCentre()
    // this.onOperatorName()
  }

  onRegistration(){
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm
    })
  }
  onRegistrationLeft(){
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm
    })
  }

  onLocation(){
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.location = mNm
    })
  }
  onLocationLeft(){
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.location = mNm
    })
  }

  onCostCentre(){
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm
    })
  }

  onOperatorName(){
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.operator = mNm
    })
  }
  onOperatorNameLeft(){
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.operator = mNm
    })
  }
}
