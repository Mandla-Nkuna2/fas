import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import BowserTransaction from 'src/app/models/BowserTransaction.model';

@Component({
  selector: 'app-browsertransactions',
  templateUrl: './browsertransactions.page.html',
  styleUrls: ['./browsertransactions.page.scss'],
})
export class BrowsertransactionsPage implements OnInit {
  bowserTransaction: BowserTransaction

  constructor(private navCtrl: NavController) {
    this.bowserTransaction = new BowserTransaction()
   }

  ngOnInit() {
  }

  goBrowserTransfer()
  {
    this.navCtrl.navigateForward('browsertransfer');
  }

  onAdd(){
  }

}
