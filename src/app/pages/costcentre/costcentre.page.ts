import { Component, OnInit } from '@angular/core';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import CostCentre from 'src/app/models/supportdata/CostCentre.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-costcentre',
  templateUrl: './costcentre.page.html',
  styleUrls: ['./costcentre.page.scss'],
})
export class CostcentrePage implements OnInit {
  organization = 'InnTee';
  costcentre: CostCentre;
  costcentres: CostCentre[] = [];

  currentDate = new Date();
  returnedUser: any;
  editBool = false;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {
    this.costcentre = new CostCentre();
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
        .getCostcentre(this.organization)
        .then((mNm: any) => {
          this.costcentres = mNm;
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
    this.costcentre.CostCentGuid = uuidv4();
    this.costcentre.Capturename = this.returnedUser.UserFirstName;

    this.firebaseService
      .writeData(
        this.organization,
        'Sup_CostCentre',
        Object.assign({}, this.costcentre),
        this.costcentre.CostCentGuid,
      )
      .then(() => {
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.costcentre = new CostCentre();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onEdit(item) {
    this.costcentre = item;
    this.editBool = true;
  }

  onModify() {
    this.firebaseService
      .writeData(
        this.organization,
        'Sup_CostCentre',
        Object.assign({}, this.costcentre),
        this.costcentre.CostCentGuid,
      )
      .then(() => {
        this.editBool = false;
        this.onTableRep();
        this.popUp.showToast('Data saved successfully :-)');
        this.costcentre = new CostCentre();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
