import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import LossControl from 'src/app/models/LossControl.model';

@Component({
  selector: 'app-losscontrol',
  templateUrl: './losscontrol.page.html',
  styleUrls: ['./losscontrol.page.scss'],
})
export class LosscontrolPage implements OnInit {
  lossControl: LossControl

  agent: any []

  constructor(private navCtrl: NavController) {
    this.lossControl = new LossControl()
  }

  ngOnInit() {
  }

  goMEvent()
  {
    this.navCtrl.navigateForward('maintaincevent');
  }

  onAgent(){}
  onAgentLeft(){}

  onRegistration(){}
  onRegistrationLeft(){}

  onLossType(){}
  onLossTypeLeft(){}

  onReported(){}
  onReportedLeft(){}

  onReportedBy(){}
  onReportedByLeft(){}

  onDriverName(){}
  onDriverNameLeft(){}

  onTripAuth(){}
  onTripAuthLeft(){}

  onForfeiture(){}
  onForfeitureLeft(){}

  onDetermnOfLiab(){}
  onDetermnOfLiabLeft(){}

  onCostingDocs(){}
  onCostingDocsLeft(){}

  onActionTaken(){}
  onActionTakenLeft(){}

  agentSelect(obj){}

}
