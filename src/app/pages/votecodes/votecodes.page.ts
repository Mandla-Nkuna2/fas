import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import Votecodes from 'src/app/models/supportdata/VoteCode.model';

@Component({
  selector: 'app-votecodes',
  templateUrl: './votecodes.page.html',
  styleUrls: ['./votecodes.page.scss'],
})
export class VotecodesPage implements OnInit {
  voteCode: Votecodes;
  voteCodes: Votecodes[];
  descriptions: any[];
  finYear = ['2019/2020', '2020/2021', '2021/2022', '2022/2023'];

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.voteCode = new Votecodes();
  }

  ngOnInit() {}

  onVoteCodes() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.voteCode, this.voteCode.VoteCodeGuid)
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully =)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
