import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import FuelIssue from 'src/app/models/FuelIssue.model';

@Component({
  selector: 'app-fuelissues',
  templateUrl: './fuelissues.page.html',
  styleUrls: ['./fuelissues.page.scss'],
})
export class FuelissuesPage implements OnInit {
  fuelIssue: FuelIssue

  constructor(private navCtrl: NavController) {
    this.fuelIssue = new FuelIssue()
   }

  ngOnInit() {
  }


  goItemCompo()
  {
    this.navCtrl.navigateForward('itemcomponents');
  }

}
