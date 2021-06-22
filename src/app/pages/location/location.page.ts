import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import LocationModel from 'src/app/models/supportdata/Location.model';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  location: LocationModel;
  locations: any[];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.location = new LocationModel();
  }

  ngOnInit() {
    // this.onLocation();
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

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_Location',
        Object.assign({}, this.location),
        this.location.LocGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
