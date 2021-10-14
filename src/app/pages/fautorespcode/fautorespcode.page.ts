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

  currentDate = new Date();
  returnedUser: any;
  editBool = false;
  tblNext = true;
  tblPrev = true;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.fautorespcode = new FAutoRespCode();
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
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFirstAutoRespCodes(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = true;
          this.tblNext = false;
          this.fautorespcodes = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onNext() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFirstAutoRespCodesNext(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblNext = true;
            return;
          }
          this.tblPrev = false;
          this.fautorespcodes = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onPrev() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFirstAutoRespCodesPrev(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) {
            this.tblPrev = true;
            return;
          }
          this.tblNext = false;
          this.fautorespcodes = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }
  onLast() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getFirstAutoRespCodesLast(this.organization)
        .then((mNm: any) => {
          this.popUp.dismissLoading();
          if (!mNm) return;
          this.tblNext = true;
          this.tblPrev = false;
          this.fautorespcodes = mNm;
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onAdd() {
    this.fautorespcode.ResponseGuid = uuidv4();
    this.fautorespcode.CapName = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_Response',
        Object.assign({}, this.fautorespcode),
        this.fautorespcode.ResponseGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fautorespcode = new FAutoRespCode();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    this.fautorespcode = item;
    this.editBool = true;
  }

  onModify() {
    this.firebaseService
      .writeData(
        this.organization,
        'Sup_Response',
        Object.assign({}, this.fautorespcode),
        this.fautorespcode.ResponseGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.fautorespcode = new FAutoRespCode();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
