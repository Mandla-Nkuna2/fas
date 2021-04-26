import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilStoreTransfer from 'src/app/models/OilStoreTransfer.model';

@Component({
  selector: 'app-oiltransafer',
  templateUrl: './oiltransafer.page.html',
  styleUrls: ['./oiltransafer.page.scss'],
})
export class OiltransaferPage implements OnInit {
  oilStoreTransf: OilStoreTransfer

  constructor( private navCtrl: NavController ) {
    this.oilStoreTransf = new OilStoreTransfer()
   }

  ngOnInit() {
  }

  goOverhead()
  {
    this.navCtrl.navigateForward('overheadtrans');
  }


}
