import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import LossControl from 'src/app/models/LossControl.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-losscontrol',
  templateUrl: './losscontrol.page.html',
  styleUrls: ['./losscontrol.page.scss'],
})
export class LosscontrolPage implements OnInit {
  lossControl: LossControl

  agent: any []
  registration: any []
  lossType: any []
  yesNo = ['Y', 'N']
  reportedBy: any []
  driver: any []
  lossCntrlAction: any []

  constructor(private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper, private firebaseGetServ:
    FirebaseGetService) {
    this.lossControl = new LossControl()
  }

  ngOnInit() {
    // this.onAgent()
    //this.onRegistration()
    // this.onReportedBy()
    // this.onDriverName()
  }

  goMEvent()
  {
    this.navCtrl.navigateForward('maintaincevent');
  }

  onAgent(){
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.agent = mNm
    })
  }
  onAgentLeft(){
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.agent = mNm
    })
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

  onLossType(){
    // this.firebaseGetServ.getLossType().then((mNm: any) => {
    //   this.registration = mNm
    // })
  }
  onLossTypeLeft(){
    //this.firebaseGetServ.getLossType().then((mNm: any) => {
      //   this.registration = mNm
      // })
  }

  onReportedBy(){
    this.firebaseGetServ.getStaff().then((mNm: any) => {
      this.reportedBy = mNm
    })
  }
  onReportedByLeft(){
    this.firebaseGetServ.getStaffLeft().then((mNm: any) => {
      this.reportedBy = mNm
    })
  }

  onDriverName(){
    this.firebaseGetServ.getDriver().then((mNm: any) => {
      this.driver = mNm
    })
  }

  onActionTaken(){
    // this.firebaseGetServ.getLossCntrlAct().then((mNm: any) => {
    //   this.lossCntrlAction = mNm
    // })
  }
  onActionTakenLeft(){
     // this.firebaseGetServ.getLossCntrlActLeft().then((mNm: any) => {
    //   this.lossCntrlAction = mNm
    // })
  }

}
