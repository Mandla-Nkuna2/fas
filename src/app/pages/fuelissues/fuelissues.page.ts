import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fuelissues',
  templateUrl: './fuelissues.page.html',
  styleUrls: ['./fuelissues.page.scss'],
})
export class FuelissuesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  goItemCompo()
  {
    this.navCtrl.navigateForward('itemcomponents');
  }

}
