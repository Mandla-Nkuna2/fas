import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import FAutoRespCode from 'src/app/models/supportdata/FAutoRespCode.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-fautorespcode',
  templateUrl: './fautorespcode.page.html',
  styleUrls: ['./fautorespcode.page.scss'],
})
export class FautorespcodePage implements OnInit {
  organization = 'InnTee';
  fautorespcode: FAutoRespCode;
  fautorespcodes: FAutoRespCode[] = [];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.fautorespcode = new FAutoRespCode();
  }

  ngOnInit() {
    this.getCurentUser();
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFirstAutoRespCodes()
        .then((mNm: any) => {
          this.fautorespcodes = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
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
    this.fautorespcode.ResponseGuid = uuidv4();

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_Response',
        Object.assign({}, this.fautorespcode),
        this.fautorespcode.ResponseGuid,
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
