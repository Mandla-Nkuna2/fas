import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import ItemComponent from 'src/app/models/capture/ItemComponent.model';
import { FirebaseGetService } from 'src/app/services/firebase-service/firebase-get.service';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-itemcomponents',
  templateUrl: './itemcomponents.page.html',
  styleUrls: ['./itemcomponents.page.scss'],
})
export class ItemcomponentsPage implements OnInit {
  organization = 'InnTee';
  itemComponent: ItemComponent;
  itemComponents: any[] = [];

  registrations: any[];
  assetCompName: any[];
  assetCompMake: any[];
  assetCompModel: any[];
  servIntvl: any[];

  constructor(
    private navCtrl: NavController,
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.itemComponent = new ItemComponent();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
    this.onRegistration();
    this.onCompName();
    this.onComponentMake();
    this.onComponentModel();
    this.onServiceIntv();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemComponents()
        .then((mNm: any) => {
          this.itemComponents = mNm;
          this.onRegistrationLeft();
          this.onCompNameLeft();
          this.onComponentMakeLeft();
          this.onComponentModelLeft();
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  goItem() {
    this.navCtrl.navigateForward('items');
  }

  onRegistration() {
    this.firebaseGetServ.getRegistration().then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ.getRegistrationLeft().then((mNm: any) => {
      this.registrations = mNm;

      mNm.forEach((elm) => {
        this.itemComponents.forEach((obj) => {
          if (elm.ItemGuid == obj.ItemGuid) {
            obj.Item = elm.Reg;
          }
        });
      });
    });
  }

  onCompName() {
    this.firebaseGetServ.getCompName().then((mNm: any) => {
      this.assetCompName = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft().then((mNm: any) => {
      this.assetCompName = mNm;

      mNm.forEach((elm) => {
        this.itemComponents.forEach((obj) => {
          if (elm.CompNameGuid == obj.CompNameGuid) {
            obj.CompName = elm.CompName;
          }
        });
      });
    });
  }

  onComponentMake() {
    this.firebaseGetServ.getItemCompMake().then((mNm: any) => {
      this.assetCompMake = mNm;
    });
  }
  onComponentMakeLeft() {
    this.firebaseGetServ.getItemCompMakeLeft().then((mNm: any) => {
      this.assetCompMake = mNm;

      mNm.forEach((elm) => {
        this.itemComponents.forEach((obj) => {
          if (elm.CompMakeGuid == obj.CompMakeGuid) {
            obj.CompMake = elm.CompMake;
          }
        });
      });
    });
  }

  onComponentModel() {
    this.firebaseGetServ.getItemCompModel().then((mNm: any) => {
      this.assetCompModel = mNm;
    });
  }
  onComponentModelLeft() {
    this.firebaseGetServ.getItemCompModelLeft().then((mNm: any) => {
      this.assetCompModel = mNm;

      mNm.forEach((elm) => {
        this.itemComponents.forEach((obj) => {
          if (elm.CompModelGuid == obj.CompModelGuid) {
            obj.CompModel = elm.CompModel;
          }
        });
      });
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

  getCurentUser() {
    this.afAuth.onAuthStateChanged((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
    });
  }

  onAdd() {
    this.itemComponent.ItemCompGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_ItemComponents',
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
