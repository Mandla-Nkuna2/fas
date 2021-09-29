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

  currentDate = new Date();
  returnedUser: any;
  registrations: any[];
  maknmod: any;
  assetCompName: any[];
  assetCompMake: any[];
  assetCompModel: any[];
  servIntvl: any[];
  oilTypes: any[];
  oilMakes: any[];
  oilGrades: any[];
  oilClasses: any[];
  editBool = false;

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
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.afAuth.user.subscribe((cUser) => {
      this.getCurrentUserOrg(cUser.email);
    });
  }

  getCurrentUserOrg(email) {
    this.firebaseRepServ.getUser(email).then((mNm) => {
      let user: any = mNm;
      this.organization = user.organization;
      this.returnedUser = user;

      this.onTableRep();
      this.onRegistration();
      this.onCompName();
      this.onCompMake();
      this.onCompModel();
      this.onServiceIntv();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getItemComponents(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          this.itemComponents = mNm;
          this.onRegistrationLeft();
          this.onCompNameLeft();
          this.onCompMakeLeft();
          this.onCompModelLeft();
          this.onOilType();
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
    this.firebaseGetServ.getRegistration(this.organization).then((mNm: any) => {
      this.registrations = mNm;
    });
  }
  onRegistrationLeft() {
    this.firebaseGetServ
      .getRegistrationLeft(this.organization)
      .then((mNm: any) => {
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

  onMakenModel() {
    this.itemComponent.ItemMakeModelGuid =
      this.itemComponent.ItemGuid['ItemMakModGuid'];
    this.firebaseGetServ
      .getAssetMakenModelLeft(this.organization)
      .then((mNm: any) => {
        mNm.forEach((elm) => {
          if (elm.ItemMakModGuid == this.itemComponent.ItemMakeModelGuid) {
            this.maknmod = elm.ItemMake;
            if (elm.ItemModel) this.maknmod += ' ' + elm.ItemModel;
          }
        });
      });
  }

  onCompName() {
    this.firebaseGetServ.getCompName(this.organization).then((mNm: any) => {
      this.assetCompName = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft(this.organization).then((mNm: any) => {
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

  onCompMake() {
    this.firebaseGetServ.getItemCompMake(this.organization).then((mNm: any) => {
      this.assetCompMake = mNm;
    });
  }
  onCompMakeLeft() {
    this.firebaseGetServ
      .getItemCompMakeLeft(this.organization)
      .then((mNm: any) => {
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

  onCompModel() {
    this.firebaseGetServ
      .getItemCompModel(this.organization)
      .then((mNm: any) => {
        this.assetCompModel = mNm;
      });
  }
  onCompModelLeft() {
    this.firebaseGetServ
      .getItemCompModelLeft(this.organization)
      .then((mNm: any) => {
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
    this.firebaseGetServ.getServiceIntvl(this.organization).then((mNm: any) => {
      this.servIntvl = mNm.sort((a, b) =>
        a.ServIntval > b.ServIntval ? 1 : -1,
      );
    });
  }
  onServiceIntvLeft() {
    this.firebaseGetServ
      .getServiceIntvlLeft(this.organization)
      .then((mNm: any) => {
        this.servIntvl = mNm.sort((a, b) =>
          a.ServIntval > b.ServIntval ? 1 : -1,
        );
      });
  }

  onOilType() {
    this.firebaseGetServ.getOilMake(this.organization).then((mNm: any) => {
      this.oilMakes = mNm;
    });
    this.firebaseGetServ.getOilGrade(this.organization).then((mNm: any) => {
      this.oilGrades = mNm;
    });
    this.firebaseGetServ.getOilClass(this.organization).then((mNm: any) => {
      this.oilClasses = mNm;
    });

    this.firebaseGetServ.getOilType(this.organization).then((mNm: any) => {
      mNm.forEach((oilObj) => {
        this.oilMakes.forEach((oilM) => {
          if (oilM.OilMakeGuid == oilObj.OilMakeGuid) {
            oilObj.OilMake = oilM.OilMake;
          }
        });

        this.oilGrades.forEach((oilG) => {
          if (oilG.OilGradeGuid == oilObj.OilGradeGuid) {
            oilObj.OilGrade = oilG.OilGrade;
          }
        });

        this.oilClasses.forEach((oilC) => {
          if (oilC.OilClassGuid == oilObj.OilClassGuid) {
            oilObj.OilClass = oilC.OilClass;
          }
        });

        oilObj.OilText =
          oilObj.OilMake + ' / ' + oilObj.OilGrade + ' / ' + oilObj.OilClass;
      });
      this.oilTypes = mNm;
    });
  }
  onOilTypeLeft() {
    this.firebaseGetServ.getOilTypeLeft(this.organization).then((mNm: any) => {
      mNm.forEach((oilObj) => {
        this.oilMakes.forEach((oilM) => {
          if (oilM.OilMakeGuid == oilObj.OilMakeGuid) {
            oilObj.OilMake = oilM.OilMake;
          }
        });

        this.oilGrades.forEach((oilG) => {
          if (oilG.OilGradeGuid == oilObj.OilGradeGuid) {
            oilObj.OilGrade = oilG.OilGrade;
          }
        });

        this.oilClasses.forEach((oilC) => {
          if (oilC.OilClassGuid == oilObj.OilClassGuid) {
            oilObj.OilClass = oilC.OilClass;
          }
        });

        oilObj.OilText =
          oilObj.OilMake + ' / ' + oilObj.OilGrade + ' / ' + oilObj.OilClass;
      });
      this.oilTypes = mNm;
    });
  }

  onAdd() {
    this.itemComponent.ItemCompGuid = uuidv4();
    this.itemComponent.Capturename = this.returnedUser.UserFirstName;

    if (this.itemComponent.ItemGuid)
      this.itemComponent.ItemGuid = this.itemComponent.ItemGuid['ItemGuid'];
    if (this.itemComponent.CompNameGuid)
      this.itemComponent.CompNameGuid =
        this.itemComponent.CompNameGuid['CompNameGuid'];
    if (this.itemComponent.CompMakeGuid)
      this.itemComponent.CompMakeGuid =
        this.itemComponent.CompMakeGuid['CompMakeGuid'];
    if (this.itemComponent.CompModelGuid)
      this.itemComponent.CompModelGuid =
        this.itemComponent.CompModelGuid['CompModelGuid'];
    if (this.itemComponent.ServIntvalGuid)
      this.itemComponent.ServIntvalGuid =
        this.itemComponent.ServIntvalGuid['ServIntvalGuid'];
    if (this.itemComponent.OilTypeGuid)
      this.itemComponent.OilTypeGuid =
        this.itemComponent.OilTypeGuid['OilGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_ItemComponents',
        Object.assign({}, this.itemComponent),
        this.itemComponent.ItemCompGuid,
      )
      .then(() => {
        this.maknmod = null;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.itemComponent = new ItemComponent();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    this.itemComponent = item;
    this.editBool = true;
  }

  onModify() {
    if (this.itemComponent.ItemGuid)
      if (this.itemComponent.ItemGuid['ItemGuid'])
        this.itemComponent.ItemGuid = this.itemComponent.ItemGuid['ItemGuid'];
    if (this.itemComponent.CompNameGuid)
      if (this.itemComponent.CompNameGuid['CompNameGuid'])
        this.itemComponent.CompNameGuid =
          this.itemComponent.CompNameGuid['CompNameGuid'];
    if (this.itemComponent.CompMakeGuid)
      if (this.itemComponent.CompMakeGuid['CompMakeGuid'])
        this.itemComponent.CompMakeGuid =
          this.itemComponent.CompMakeGuid['CompMakeGuid'];
    if (this.itemComponent.CompModelGuid)
      if (this.itemComponent.CompModelGuid['CompModelGuid'])
        this.itemComponent.CompModelGuid =
          this.itemComponent.CompModelGuid['CompModelGuid'];
    if (this.itemComponent.ServIntvalGuid)
      if (this.itemComponent.ServIntvalGuid['ServIntvalGuid'])
        this.itemComponent.ServIntvalGuid =
          this.itemComponent.ServIntvalGuid['ServIntvalGuid'];
    if (this.itemComponent.OilTypeGuid)
      if (this.itemComponent.OilTypeGuid['OilGuid'])
        this.itemComponent.OilTypeGuid =
          this.itemComponent.OilTypeGuid['OilGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        'Mst_ItemComponents',
        Object.assign({}, this.itemComponent),
        this.itemComponent.ItemCompGuid,
      )
      .then(() => {
        this.editBool = false;
        this.maknmod = null;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.itemComponent = new ItemComponent();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
