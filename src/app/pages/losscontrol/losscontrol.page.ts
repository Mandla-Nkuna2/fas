import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-losscontrol',
  templateUrl: './losscontrol.page.html',
  styleUrls: ['./losscontrol.page.scss'],
})
export class LosscontrolPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goMEvent()
  {
    this.navCtrl.navigateForward('maintaincevent');
  }

}
