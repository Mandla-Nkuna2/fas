import { Asset, GeneralInformation, MeterInformation, OtherInformation, RateInformation } from './../../models/Asset.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.page.html',
  styleUrls: ['./addassets.page.scss'],
})
export class AddassetsPage implements OnInit {
  asset: Asset

  constructor() {
    this.asset = new Asset();
    this.asset.generalInformation = new GeneralInformation();
    this.asset.meterInformation = new MeterInformation();
    this.asset.rateInformation = new RateInformation();
    this.asset.otherInformation = new OtherInformation();
   }

  ngOnInit() {
  }

}
