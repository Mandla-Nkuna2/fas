import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import FAutoRespCode from 'src/app/models/supportdata/FAutoRespCode.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-fautorespcode',
  templateUrl: './fautorespcode.page.html',
  styleUrls: ['./fautorespcode.page.scss'],
})
export class FautorespcodePage implements OnInit {
  fautorespcode: FAutoRespCode;
  fautorespcodes: FAutoRespCode[] = [];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
  ) {
    this.fautorespcode = new FAutoRespCode();
  }

  ngOnInit() {
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

  onAdd() {
    this.fautorespcode.ResponseGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
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
