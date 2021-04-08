import { Component, OnInit } from '@angular/core';
import {FirebaseService } from '../../services/firebase-service/firebase-service.service';
import {PopupHelper} from '../../services/helpers/popup-helper';
@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.page.html',
  styleUrls: ['./assetdetail.page.scss'],
})
export class AssetdetailPage implements OnInit {

  constructor(
    private firebaseSevice: FirebaseService,
    private popUp: PopupHelper
  ) { }

  ngOnInit() {
    let assets =  {
      name: 'awdwdawdawd',
      surname: 'adawdawdawdawd',
      date: 'adawdawdaw',
      uncle: 'adawawdwa'
    }
    this.firebaseSevice.saveAssets(assets, '1234').then((s) => {
      this.popUp.showAlert('Success', 'Your data has been saved :)')
    }).catch((errror) =>  {
      this.popUp.showError(errror);
    })
  }

}
