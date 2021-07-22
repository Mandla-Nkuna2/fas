import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import Votecodes from 'src/app/models/supportdata/VoteCode.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-votecodes',
  templateUrl: './votecodes.page.html',
  styleUrls: ['./votecodes.page.scss'],
})
export class VotecodesPage implements OnInit {
  voteCode: Votecodes;
  voteCodes: Votecodes[] = [];

  descriptions = ['DONATED VEHICLES'];
  finYear = ['2019/2020', '2020/2021', '2021/2022', '2022/2023'];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.voteCode = new Votecodes();
  }

  ngOnInit() {
    this.onTableRep();
    this.onVoteCodes();
    this.onDescription();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getVotecodes()
        .then((mNm: any) => {
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
    this.firebaseGetServ.getVoteCodes().then((mNm: any) => {
      this.voteCodes = mNm;
    });
  }
  onVoteCodesLeft() {
    this.firebaseGetServ.getVoteCodesLeft().then((mNm: any) => {
      this.voteCodes = mNm;
    });
  }

  onDescription() {}

  onAdd() {
    this.firebaseService
      .writeData(
        'myTest',
        'Trn_Votecodes',
        Object.assign({}, this.voteCode),
        this.voteCode.VoteCodeGuid,
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
