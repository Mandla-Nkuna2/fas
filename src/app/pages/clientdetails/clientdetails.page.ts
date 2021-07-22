import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ClientDetails from 'src/app/models/supportdata/ClientDetails.model';
import { FirebaseReportService } from 'src/app/services/firebase-service/firebase-report.service';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.page.html',
  styleUrls: ['./clientdetails.page.scss'],
})
export class ClientdetailsPage implements OnInit {
  client: ClientDetails;
  clients: ClientDetails[] = [];

  constructor(
    private firebaseRepServ: FirebaseReportService,
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.client = new ClientDetails();
  }

  ngOnInit() {
    this.onTableRep();
  }

  onTableRep() {
    this.popUp.showLoading('loading...').then(() => {
      this.firebaseRepServ
        .getClients()
        .then((mNm: any) => {
          this.clients = mNm;
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
    this.firebaseService
      .writeData(
        'myTest',
        'Mst_Client',
        Object.assign({}, this.client),
        this.client.ClientGuid,
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
