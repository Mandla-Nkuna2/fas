import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-firstautoytd',
  templateUrl: './firstautoytd.component.html',
  styleUrls: ['./firstautoytd.component.scss'],
})
export class FirstautoytdComponent implements OnInit {
  dateFrom: any;

  location: any;
  locations: any[];

  level: any;
  levels = ['0', '1', '2', '3', '4'];

  constructor(
    private firebaseGetServ: FirebaseGetService,
    private popUp: PopupHelper,
  ) {}

  ngOnInit() {
    this.onLocation();
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
}
