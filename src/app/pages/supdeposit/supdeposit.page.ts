import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-supdeposit',
  templateUrl: './supdeposit.page.html',
  styleUrls: ['./supdeposit.page.scss'],
})
export class SupdepositPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goFuelnOilPrice()
  {
    this.navCtrl.navigateForward('fuelnoilprice');
  }

}
