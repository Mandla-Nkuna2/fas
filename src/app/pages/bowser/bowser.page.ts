import { Component, OnInit } from '@angular/core';
import Bowser from 'src/app/models/supportdata/Bowser.model';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';

@Component({
  selector: 'app-bowser',
  templateUrl: './bowser.page.html',
  styleUrls: ['./bowser.page.scss'],
})
export class BowserPage implements OnInit {
  bowser: Bowser

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,)
    {
    this.bowser = new Bowser()
   }

  ngOnInit() {
  }

  onAdd(){
    this.firebaseService.writeData('myTest', this.bowser, this.bowser.BowserGuid).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) => {
      this.popUp.showError(err)
    })
  }
  onModify(){}
  onDeActivate(){}
  onClear(){}
}
