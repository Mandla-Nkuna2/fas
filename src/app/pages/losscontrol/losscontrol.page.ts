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

  constructor(private navCtrl: NavController) {
    this.lossControl = new LossControl()
  }

  ngOnInit() {
  }

  goMEvent()
  {
    this.navCtrl.navigateForward('maintaincevent');
  }

}
