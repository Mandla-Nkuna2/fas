import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Revenue from 'src/app/models/Revenue.model';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.page.html',
  styleUrls: ['./revenue.page.scss'],
})
export class RevenuePage implements OnInit {
  revenue: Revenue

  constructor(private navCtrl: NavController) {
    this.revenue = new Revenue();
   }

  ngOnInit() {
  }

  storeIssue()
  {
    this.navCtrl.navigateForward('storeissue');
  }

}
