import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-systemmanmajequip',
  templateUrl: './systemmanmajequip.component.html',
  styleUrls: ['./systemmanmajequip.component.scss'],
})
export class SystemmanmajequipComponent implements OnInit {
  finYear: any;
  finYears = ['2019/2020', '2020/2021', '2021/2022'];

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

  maintType: any;
  maintTypes = ['Accident', 'G.E.T', 'Repair', 'Service', 'Tyre / Track'];

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
