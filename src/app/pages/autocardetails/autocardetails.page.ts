import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import AutoCard from 'src/app/models/Autocard.model';

@Component({
  selector: 'app-autocardetails',
  templateUrl: './autocardetails.page.html',
  styleUrls: ['./autocardetails.page.scss'],
})
export class AutocardetailsPage implements OnInit {
  autocard: AutoCard

  constructor(private navCtrl: NavController) {
    this.autocard = new AutoCard()
   }

  ngOnInit() {
  }

  goBrowserTransactions()
  {
    this.navCtrl.navigateForward('browsertransactions');
  }

}
