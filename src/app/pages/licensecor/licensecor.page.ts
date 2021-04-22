import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import LicCorAndSafInspcDates from 'src/app/models/LicCorAndSafInspcDates.model';

@Component({
  selector: 'app-licensecor',
  templateUrl: './licensecor.page.html',
  styleUrls: ['./licensecor.page.scss'],
})
export class LicensecorPage implements OnInit {
  licCorAndSafInspec: LicCorAndSafInspcDates

  constructor(private navCtrl: NavController) {
    this.licCorAndSafInspec = new LicCorAndSafInspcDates()
  }

  ngOnInit() {
  }

  goLossControl()
  {
    this.navCtrl.navigateForward('losscontrol');
  }

  onAdd(){

  }

}
