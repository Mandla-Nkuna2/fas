import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-fuelconsumptmajorequip',
  templateUrl: './fuelconsumptmajorequip.component.html',
  styleUrls: ['./fuelconsumptmajorequip.component.scss'],
})
export class FuelconsumptmajorequipComponent implements OnInit {
  dateScope: any;

  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

  dateFrom: any;
  dateTo: any;

  locOrReg: any;

  location: any;
  locations: any[];

  itemType: any;
  itemTypes: any[];

  sortOption: any;
  sortOptions = [
    'Add cost description',
    'Cost centre',
    'Location',
    'Registration',
  ];

  registration: any;
  registrations: any[];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onLocation();
    this.onItemType();
    this.onRegistration();
  }

  onLocation() {
    this.firebaseGetServ.getLocation().then((mNm: any) => {
      this.locations = mNm;
    });
  }
  onLocationLeft() {
    this.firebaseGetServ.getLocationLeft().then((mNm: any) => {
      this.locations = mNm;
    });
  }

  onItemType() {
    this.firebaseGetServ.getAssetTypeName().then((mNm: any) => {
      this.itemTypes = mNm;
    });
  }
  onItemTypeLeft() {
    this.firebaseGetServ.getAssetTypeNameLeft().then((mNm: any) => {
      this.itemTypes = mNm;
    });
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registrations = mNm;
    });
  }
}
