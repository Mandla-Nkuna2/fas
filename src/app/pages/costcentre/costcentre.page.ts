import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import CostCentre from 'src/app/models/supportdata/CostCentre.model';

@Component({
  selector: 'app-costcentre',
  templateUrl: './costcentre.page.html',
  styleUrls: ['./costcentre.page.scss'],
})
export class CostcentrePage implements OnInit {
  costcentre: CostCentre

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,)
    {
      this.costcentre = new CostCentre()
    }

  ngOnInit() {
    this.firebaseService.writeData('myTest', this.costcentre, this.costcentre.CostCentGuid).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }

  onAdd(){}
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
