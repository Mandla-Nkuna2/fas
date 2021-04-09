import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import { Asset, GeneralInformation, MeterInformation, OtherInformation, RateInformation } from './../../models/Asset.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.page.html',
  styleUrls: ['./addassets.page.scss'],
})
export class AddassetsPage implements OnInit {
  asset: Asset

  constructor(private firebaseService: FirebaseService, private popUp: PopupHelper) {
    this.asset = new Asset();
    this.asset.generalInformation = new GeneralInformation();
    this.asset.meterInformation = new MeterInformation();
    this.asset.rateInformation = new RateInformation();
    this.asset.otherInformation = new OtherInformation();
   }

  ngOnInit() {
  }

  onAdd(){
    this.firebaseService.saveAsset(this.asset).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }

}
