import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import BowserTransaction from 'src/app/models/capture/BowserTransaction.model';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-browsertransactions',
  templateUrl: './browsertransactions.page.html',
  styleUrls: ['./browsertransactions.page.scss'],
})
export class BrowsertransactionsPage implements OnInit {
  bowserTransaction: BowserTransaction;

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.bowserTransaction = new BowserTransaction();
  }

  ngOnInit() {}

  goBrowserTransfer() {
    this.navCtrl.navigateForward('browsertransfer');
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_Bowsers',
        Object.assign({}, this.bowserTransaction),
        this.bowserTransaction.BowserTrnGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
