import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stafftimesheets',
  templateUrl: './stafftimesheets.page.html',
  styleUrls: ['./stafftimesheets.page.scss'],
})
export class StafftimesheetsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goRevenue()
  {
    this.navCtrl.navigateForward('revenue');
  }

}
