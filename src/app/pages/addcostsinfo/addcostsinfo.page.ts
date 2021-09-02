import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import AddCostDesc from 'src/app/models/capture/AddCostDesc.model';
import FixedCostType from 'src/app/models/capture/FixedCostType.model';
import OverheadType from 'src/app/models/capture/OverheadType.model';
import TraffFineAct from 'src/app/models/capture/TraffFineAct.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addcostsinfo',
  templateUrl: './addcostsinfo.page.html',
  styleUrls: ['./addcostsinfo.page.scss'],
})
export class AddcostsinfoPage implements OnInit {
  organization = 'InnTee';
  returnedUser: any;

  fixedCostType: FixedCostType;
  overheadType: OverheadType;
  addCostDesc: AddCostDesc;
  traffFineAct: TraffFineAct;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseSevice: FirebaseService,
    public afAuth: AngularFireAuth,
    private popUp: PopupHelper,
  ) {
    this.fixedCostType = new FixedCostType();
    this.overheadType = new OverheadType();
    this.addCostDesc = new AddCostDesc();
    this.traffFineAct = new TraffFineAct();
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

  onAddFixedCostType() {
    this.fixedCostType.FixedCostTypeGuid = uuidv4();
    this.fixedCostType.CapName = this.returnedUser.UserFirstName;
    this.fixedCostType.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_FixedCostType',
        Object.assign({}, this.fixedCostType),
        this.fixedCostType.FixedCostTypeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.fixedCostType = new FixedCostType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddOverheadType() {
    this.overheadType.OverheadTypeGuid = uuidv4();
    this.overheadType.CapName = this.returnedUser.UserFirstName;
    this.overheadType.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_OverheadType',
        Object.assign({}, this.overheadType),
        this.overheadType.OverheadTypeGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.overheadType = new OverheadType();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddAddCostDesc() {
    this.addCostDesc.AddCostDescGuid = uuidv4();
    this.addCostDesc.CapName = this.returnedUser.UserFirstName;
    this.addCostDesc.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_AddCostDesc',
        Object.assign({}, this.addCostDesc),
        this.addCostDesc.AddCostDescGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.addCostDesc = new AddCostDesc();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }

  onAddTraffFineAct() {
    this.traffFineAct.TrafFineActGuid = uuidv4();
    this.traffFineAct.CapName = this.returnedUser.UserFirstName;
    this.traffFineAct.Active = 'Y';

    this.firebaseSevice
      .writeData(
        this.organization,
        'Sup_TrafFineAct',
        Object.assign({}, this.traffFineAct),
        this.traffFineAct.TrafFineActGuid,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
        this.traffFineAct = new TraffFineAct();
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
