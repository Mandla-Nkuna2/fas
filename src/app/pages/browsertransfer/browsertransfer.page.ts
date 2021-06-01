import { Component, OnInit } from '@angular/core';
import BowserTransfer from 'src/app/models/capture/BowserTransfer.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-browsertransfer',
  templateUrl: './browsertransfer.page.html',
  styleUrls: ['./browsertransfer.page.scss'],
})
export class BrowsertransferPage implements OnInit {
  bowserTransfer: BowserTransfer;

  voucherNo: any[];
  costCentre: any;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.bowserTransfer = new BowserTransfer();
  }

  ngOnInit() {
    // this.onCostCentre()
  }

  onCostCentre() {
    this.firebaseGetServ.getCostCentre().then((mNm: any) => {
      this.costCentre = mNm;
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        Object.assign({}, this.bowserTransfer),
        this.bowserTransfer.FuelTransferGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
