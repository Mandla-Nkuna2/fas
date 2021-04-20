import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
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
  assets: any = [];
  loadingComplete = false
  makesAndModels: any = []
  category: any = []
  colors: any = []
  tyreSizes: any = []
  meterTypes: any = []

  constructor(private firebaseService: FirebaseService, private popUp: PopupHelper, private firebaseGetServ: FirebaseGetService) {
    this.asset = new Asset();
    this.asset.generalInformation = new GeneralInformation();
    this.asset.meterInformation = new MeterInformation();
    this.asset.rateInformation = new RateInformation();
    this.asset.otherInformation = new OtherInformation();
  }

  ngOnInit() {
    //this.onMakeAndModel();
    //this.onCategory();
    //this.onColor();
    //this.onTireSizes();
    //this.onMeterType();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  onAdd(){
    this.firebaseService.saveAsset(this.asset).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }

  onMakeAndModel(){
    this.firebaseGetServ.getMakeAndModel().then((mNm: any) => {
      this.makesAndModels = mNm;
    })
  }

  onType(){
    this.firebaseGetServ.getType().then((mNm: any) => {
      this.makesAndModels = mNm;
    })
  }

  onCategory(){
    this.firebaseGetServ.getCategory().then((cat: any) => {
      this.category = cat.filter(this.onlyUnique)
    })
  }

  onColor(){
    this.firebaseGetServ.getColor().then((col: any) => {
      this.colors = col;
    })
  }

  onTireSizes(){
    this.firebaseGetServ.getTyreSize().then((size: any) => {
      this.tyreSizes = size
    })
  }

  onMeterType(){
    this.firebaseGetServ.getMeterType().then((mType: any) => {
      this.meterTypes = mType.filter(this.onlyUnique)
    })
  }

  getData() {
    this.popUp.showLoading('getting data...').then(() =>  {
      this.firebaseGetServ.getAsset().then((assets) => {
        this.assets = assets;
          this.loadingComplete = true;
          this.popUp.dismissLoading();
        })
      })
  }

  onChange(){
    console.log(this.asset.meterInformation.MeterType);
  }
}
