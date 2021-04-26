import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import StoreIssue from 'src/app/models/StoreIssue.model';

@Component({
  selector: 'app-storeissue',
  templateUrl: './storeissue.page.html',
  styleUrls: ['./storeissue.page.scss'],
})
export class StoreissuePage implements OnInit {
  storeIssue: StoreIssue

  constructor(private navCtrl: NavController) {
    this.storeIssue = new StoreIssue()
   }

  ngOnInit() {
  }

  goSupplierDeposit()
  {
    this.navCtrl.navigateForward('supdeposit');
  }

}
