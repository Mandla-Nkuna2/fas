import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-monthlyvehiclereport',
  templateUrl: './monthlyvehiclereport.page.html',
  styleUrls: ['./monthlyvehiclereport.page.scss'],
})
export class MonthlyvehiclereportPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goDetails()
  {
    this.navCtrl.navigateForward('monthlyvrdetail');
  }

}
