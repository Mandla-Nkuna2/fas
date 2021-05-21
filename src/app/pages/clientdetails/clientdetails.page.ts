import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ClientDetails from 'src/app/models/supportdata/ClientDetails.model';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.page.html',
  styleUrls: ['./clientdetails.page.scss'],
})
export class ClientdetailsPage implements OnInit {
  client: ClientDetails

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,)
    {
    this.client = new ClientDetails()
   }

  ngOnInit() {
  }

  onAdd(){
    this.firebaseService.writeData('myTest', this.client, this.client.ClientGuid).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
