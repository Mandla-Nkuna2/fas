import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import StoreCatgItem from 'src/app/models/capture/StoreCatgItem.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addstoreissueinfo',
  templateUrl: './addstoreissueinfo.page.html',
  styleUrls: ['./addstoreissueinfo.page.scss'],
})
export class AddstoreissueinfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  storeCatItem: StoreCatgItem;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.storeCatItem = new StoreCatgItem();
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

  onAddStoreItem() {
    this.storeCatItem.StoreCatgItemGuid = uuidv4();
    this.storeCatItem.Active = 'Y';
    this.storeCatItem.CapName = this.returnedUser.UserFirstName;

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_StoreCatgItem',
        Object.assign({}, this.storeCatItem),
        this.storeCatItem.StoreCatgItemGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.storeCatItem = new StoreCatgItem();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
