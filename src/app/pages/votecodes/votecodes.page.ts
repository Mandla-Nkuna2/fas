import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import Votecodes from 'src/app/models/supportdata/VoteCode.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-votecodes',
  templateUrl: './votecodes.page.html',
  styleUrls: ['./votecodes.page.scss'],
})
export class VotecodesPage implements OnInit {
  organization = 'InnTee';
  voteCode: Votecodes;
  voteCodes: any[] = [];

  currentDate = new Date();
  returnedUser: any;
  voteCodesSel: any[] = [];
  finYear = ['2019/2020', '2020/2021', '2021/2022', '2022/2023'];
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
    public afAuth: AngularFireAuth,
  ) {
    this.voteCode = new Votecodes();
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
      this.onVoteCodes();
      this.onDescription();
    });
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getVotecodes(this.organization)
        .then((mNm: any) => {
          mNm.forEach((elm) => {
            elm.vCode = elm.Votecode;
          });
          this.voteCodes = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onVoteCodes() {
    this.firebaseGetServ
      .getVoteCodesLeft(this.organization)
      .then((mNm: any) => {
        this.voteCodesSel = mNm;
      });
  }

  onDescription() {}

  onAdd() {
    this.voteCode.VoteCodeGuid = uuidv4();
    this.voteCode.CaptureName = this.returnedUser.UserFirstName;

    if (this.voteCode.Votecode)
      this.voteCode.Votecode = this.voteCode.Votecode['Votecode'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Votecodes',
        Object.assign({}, this.voteCode),
        this.voteCode.VoteCodeGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.voteCode = new Votecodes();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    if (typeof item.Votecode != 'object')
      item.Votecode = {
        VoteCodeGuid: item.Votecode,
        Votecode: item.Votecode,
      };

    this.voteCode = item;
    this.editBool = true;
  }

  onModify() {
    if (this.voteCode.Votecode)
      if (this.voteCode.Votecode['Votecode'])
        this.voteCode.Votecode = this.voteCode.Votecode['Votecode'];

    this.firebaseService
      .writeData(
        this.organization,
        'Trn_Votecodes',
        Object.assign({}, this.voteCode),
        this.voteCode.VoteCodeGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.voteCode = new Votecodes();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
