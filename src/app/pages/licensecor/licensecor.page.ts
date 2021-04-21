import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-licensecor',
  templateUrl: './licensecor.page.html',
  styleUrls: ['./licensecor.page.scss'],
})
export class LicensecorPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goLossControl()
  {
    this.navCtrl.navigateForward('losscontrol');
  }

}
