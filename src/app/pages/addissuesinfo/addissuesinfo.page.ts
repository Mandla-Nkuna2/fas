import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';
import { FirebaseService } from 'src/app/services/firebase-service/firebase-service.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-addissuesinfo',
  templateUrl: './addissuesinfo.page.html',
  styleUrls: ['./addissuesinfo.page.scss'],
})
export class AddissuesinfoPage implements OnInit {
  organization = 'InnTee';
  agent: string;
  returnedUser: any;

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    public afAuth: AngularFireAuth,
  ) {}

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

  onAdd() {
    this.agent = uuidv4();
    // this.agent.Capturename = this.returnedUser.UserFirstName;
    // if (this.agent.UserGroupGuid)
    //   this.agent.UserGroupGuid = this.agent.UserGroupGuid['UserGroupGuid'];
    // if (this.agent.LocUserCode)
    //   this.agent.LocUserCode = this.agent.LocUserCode['LocGuid'];

    this.firebaseService
      .writeData(
        this.organization,
        '',
        Object.assign({}, this.agent),
        this.agent,
      )
      .then(() => {
        this.popUp.showToast('Data saved successfully :-)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
}
