import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import OilStoreTransaction from 'src/app/models/OilStoreTransaction.model';

@Component({
  selector: 'app-oilstoretrans',
  templateUrl: './oilstoretrans.page.html',
  styleUrls: ['./oilstoretrans.page.scss'],
})
export class OilstoretransPage implements OnInit {
  oilstoreTrans: OilStoreTransaction

  constructor( private navCtrl: NavController ) {
    this.oilstoreTrans = new OilStoreTransaction()
   }

  ngOnInit() {
  }

  goOilTransfer()
  {
    this.navCtrl.navigateForward('oiltransafer');
  }

}
