import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fuelnoilprice',
  templateUrl: './fuelnoilprice.page.html',
  styleUrls: ['./fuelnoilprice.page.scss'],
})
export class FuelnoilpricePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}

  goABSAImport()
  {
    this.navCtrl.navigateForward('absaimport');
  }
}
