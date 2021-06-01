import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import ItemComponent from 'src/app/models/capture/ItemComponent.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';

@Component({
  selector: 'app-itemcomponents',
  templateUrl: './itemcomponents.page.html',
  styleUrls: ['./itemcomponents.page.scss'],
})
export class ItemcomponentsPage implements OnInit {
  itemComponent: ItemComponent;

  registration: any[];
  assetCompName: any[];
  assetCompMake: any[];
  assetCompModel: any[];
  servIntvl: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.itemComponent = new ItemComponent();
  }

  ngOnInit() {
    //this.onRegistration()
    // this.onCompName()
    // this.onComponentMake()
    // this.onComponentModel()
    //this.onServiceIntv()
  }

  goItem() {
    this.navCtrl.navigateForward('items');
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registration = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registration = mNm;
    });
  }

  // onMakeModel(){}
  // onMakeModelLeft(){}

  onCompName() {
    this.firebaseGetServ.getCompName().then((mNm: any) => {
      this.assetCompName = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft().then((mNm: any) => {
      this.assetCompName = mNm;
    });
  }

  onComponentMake() {
    this.firebaseGetServ.getAssetCompMake().then((mNm: any) => {
      this.assetCompMake = mNm;
    });
  }
  onComponentMakeLeft() {
    this.firebaseGetServ.getAssetCompMakeLeft().then((mNm: any) => {
      this.assetCompMake = mNm;
    });
  }

  onComponentModel() {
    this.firebaseGetServ.getAssetCompModel().then((mNm: any) => {
      this.assetCompModel = mNm;
    });
  }
  onComponentModelLeft() {
    this.firebaseGetServ.getAssetCompModelLeft().then((mNm: any) => {
      this.assetCompModel = mNm;
    });
  }

  onServiceIntv() {
    this.firebaseGetServ.getServiceIntvl().then((mNm: any) => {
      this.servIntvl = mNm.sort((a, b) =>
        a.ServIntval > b.ServIntval ? 1 : -1,
      );
    });
  }
  onServiceIntvLeft() {
    this.firebaseGetServ.getServiceIntvlLeft().then((mNm: any) => {
      this.servIntvl = mNm.sort((a, b) =>
        a.ServIntval > b.ServIntval ? 1 : -1,
      );
    });
  }

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        Object.assign({}, this.itemComponent),
        this.itemComponent.ItemCompGuid,
      )
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
