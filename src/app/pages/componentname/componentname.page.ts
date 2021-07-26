import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ComponentName from 'src/app/models/supportdata/ComponentName.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-componentname',
  templateUrl: './componentname.page.html',
  styleUrls: ['./componentname.page.scss'],
})
export class ComponentnamePage implements OnInit {
  componentName: ComponentName;
  componentNames: ComponentName[] = [];

  compSubCatView = false;
  compNames: any[];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.componentName = new ComponentName();
  }

  ngOnInit() {
    this.onTableRep();
    this.onCompName();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getComponentNames()
        .then((mNm: any) => {
          this.componentNames = mNm;
          this.popUp.dismissLoading();
        })
        .catch((err) => {
          this.popUp.dismissLoading().then(() => {
            this.popUp.showError(err);
          });
        });
    });
  }

  onCompSubCatView() {
    this.compSubCatView = !this.compSubCatView;
  }

  onCompName() {
    this.firebaseGetServ.getCompName().then((mNm: any) => {
      this.compNames = mNm;
    });
  }
  onCompNameLeft() {
    this.firebaseGetServ.getCompNameLeft().then((mNm: any) => {
      this.compNames = mNm;
    });
  }

  onAdd() {
    this.componentName.CompNameGuid = uuidv4();

    this.firebaseService
      .writeData(
        'myTest',
        'Sup_CompName',
        Object.assign({}, this.componentName),
        this.componentName.CompNameGuid,
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
