import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-maintreason',
  templateUrl: './maintreason.component.html',
  styleUrls: ['./maintreason.component.scss'],
})
export class MaintreasonComponent implements OnInit {
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

  itemCategory: any;
  itemCategories: any = ['MAJOR EQUIPMENT', 'METERLESS EQUIPMENT', 'VEHICLES'];

  sortOption: any;
  sortOptions = [
    'Add cost description',
    'Cost centre',
    'Location',
    'Registration',
  ];

  registration: any;
  registrations: any[];

  maintReason: any;
  maintReasons: any[];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    // this.onLocation();
    // this.onRegistration();
    // this.onMaintReason();
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

  onItemType() {}
  onItemTypeLeft() {}

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

  onMaintReason() {
    this.firebaseGetServ.getMaintReason().then((mNm: any) => {
      this.maintReasons = mNm;
    });
  }
}
