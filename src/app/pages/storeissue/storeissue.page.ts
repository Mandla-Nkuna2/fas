import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-storeissue',
  templateUrl: './storeissue.page.html',
  styleUrls: ['./storeissue.page.scss'],
})
export class StoreissuePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goSupplierDeposit()
  {
    this.navCtrl.navigateForward('supdeposit');
  }

}
