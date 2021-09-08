import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import AssetTypeCap from 'src/app/models/capture/AssetTypeCap.model';
import AssetTypeClass from 'src/app/models/capture/AssetTypeClass.model';
import AssetTypeName from 'src/app/models/capture/AssetTypeName.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-additeminfo',
  templateUrl: './additeminfo.page.html',
  styleUrls: ['./additeminfo.page.scss'],
})
export class AdditeminfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  itemTypeName: AssetTypeName;
  itemTypeClass: AssetTypeClass;
  itemTypeCap: AssetTypeCap;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.itemTypeName = new AssetTypeName();
    this.itemTypeClass = new AssetTypeClass();
    this.itemTypeCap = new AssetTypeCap();
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
    });
  }

  onAddAssetTypeName() {
    this.itemTypeName.ItemTypeNameGuid = uuidv4();
    this.itemTypeName.Active = 'Y';
    this.itemTypeName.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_ItemTypeName',
        Object.assign({}, this.itemTypeName),
        this.itemTypeName.ItemTypeNameGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.itemTypeName = new AssetTypeName();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddAssetTypeClass() {
    this.itemTypeClass.ItemTypeClassGuid = uuidv4();
    this.itemTypeClass.Active = 'Y';
    this.itemTypeClass.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_ItemTypeClass',
        Object.assign({}, this.itemTypeClass),
        this.itemTypeClass.ItemTypeClassGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.itemTypeClass = new AssetTypeClass();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddAssetTypeCap() {
    this.itemTypeCap.ItemTypeCapGuid = uuidv4();
    this.itemTypeCap.Active = 'Y';
    this.itemTypeCap.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_ItemTypeCap',
        Object.assign({}, this.itemTypeCap),
        this.itemTypeCap.ItemTypeCapGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.itemTypeCap = new AssetTypeCap();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
