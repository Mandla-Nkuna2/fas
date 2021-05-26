import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import {
  Asset,
  GeneralInformation,
  MeterInformation,
  OtherInformation,
  RateInformation,
} from './../../models/capture/Asset.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.page.html',
  styleUrls: ['./addassets.page.scss'],
})
export class AddassetsPage implements OnInit {
  asset: Asset;
  assets: any = [];
  loadingComplete = false;
  makesAndModels: any = [];
  colors: any = [];
  tyreSizes: any = [];
  batteries: any = [];
  drivers: any = [];
  meterTypes: any = ['HOUR', 'KM', 'N/A'];
  categories: any = ['MAJOR EQUIPMENT', 'METERLESS EQUIPMENT', 'VEHICLES'];

  drop: false;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.asset = new Asset();
    this.asset.generalInformation = new GeneralInformation();
    this.asset.meterInformation = new MeterInformation();
    this.asset.rateInformation = new RateInformation();
    this.asset.otherInformation = new OtherInformation();
  }

  ngOnInit() {
    //this.onMakeAndModel();
    // this.onColor();
    //this.onTireSizes();
    //this.onDriver()
    //this.onMeterType();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  getDataDynamic() {
    this.popUp.showLoading('getting data...').then(() => {
      this.firebaseGetServ.getAsset().then((assets) => {
        this.assets = assets;
        this.loadingComplete = true;
        this.popUp.dismissLoading();
      });
    });
  }

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.asset, this.asset.generalInformation.ItemGuid)
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully =)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onMakeAndModel() {
    this.firebaseGetServ.getMakeAndModel().then((mNm: any) => {
      this.makesAndModels = mNm;
    });
  }
  onMakeAndModelLeft() {
    console.log('loading more');
    this.firebaseGetServ.getMakeAndModelLeft().then((mNm: any) => {
      this.makesAndModels = mNm;
    });
  }

  onType() {
    this.firebaseGetServ.getAssetMakMod().then((mNm: any) => {
      this.makesAndModels = mNm;
    });
  }
  onTypeLeft() {
    this.firebaseGetServ.getAssetMakModLeft().then((mNm: any) => {
      this.makesAndModels = mNm;
    });
  }

  onColor() {
    this.firebaseGetServ.getColor().then((col: any) => {
      this.colors = col;
    });
  }
  onColorLeft() {
    this.firebaseGetServ.getColorLeft().then((col: any) => {
      this.colors = col;
    });
  }

  onBattery() {}
  onBatteryLeft() {}

  onDriver() {
    this.firebaseGetServ.getDriver().then((col: any) => {
      this.drivers = col;
      // col.forEach(obj => {
      //   if (obj.StaffCatgGuid == '7E55FF15-8B93-4CC4-B488-BC0E6FE2971E') {
      //     this.driver.push(obj)
      //   }
      // });
    });
  }
  onDriverLeft() {}

  onTireSizes() {
    this.firebaseGetServ.getTyreSize().then((size: any) => {
      this.tyreSizes = size;
    });
  }
  onTireSizesLeft() {
    this.firebaseGetServ.getTyreSizeLeft().then((size: any) => {
      this.tyreSizes = size;
    });
  }

  onChange(obj) {
    console.log(obj.value);
    console.log(this.asset.generalInformation.ColourGuid);
  }

  onColorSelected(colObj) {
    this.asset.generalInformation.ColourGuid = colObj.colorGuid;
  }

  onMakeModelSel(colObj) {
    this.asset.generalInformation.ItemMakModGuid = colObj.ItemMakModGuid;
  }

  onTypeSel(colObj) {
    this.asset.generalInformation.ItemTypeGuid = colObj.ItemTypeGuid;
  }

  onCategorySel(colObj) {
    this.asset.generalInformation.ItemCatg = colObj.ItemCatg;
  }

  onBatterySel(colObj) {
    this.asset.generalInformation.BatteryGuid = colObj.BatteryGuid;
  }

  onDriverSel(colObj) {
    this.asset.generalInformation.DriverName = colObj.DriverName;
  }

  onFrontTyreSel(colObj) {
    this.asset.generalInformation.FrontTyreGuid = colObj.FrontTyreGuid;
  }

  onRearTyreSel(colObj) {
    this.asset.generalInformation.RearTyreGuid = colObj.RearTyreGuid;
  }

  onDomClick() {
    //this.child.onParentClick();
  }
}
