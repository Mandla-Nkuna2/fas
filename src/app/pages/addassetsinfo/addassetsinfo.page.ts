import { TestAssets } from './../../models/capture/TestAssets.model';
import { Component, OnInit } from '@angular/core';
import {FirebaseService } from '../../services/firebase-service/firebase-service.service';
import {PopupHelper} from '../../services/helpers/popup-helper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addassetsinfo',
  templateUrl: './addassetsinfo.page.html',
  styleUrls: ['./addassetsinfo.page.scss'],
})
export class AddassetsinfoPage implements OnInit {
testAsset: TestAssets

  constructor(private firebaseSevice: FirebaseService, private popUp: PopupHelper) {
    this.testAsset = new TestAssets('1001', 'qwe', 'ewq', 'weq');
  }

  ngOnInit() {}

  onAdd(){
    this.firebaseSevice.saveAssetss(this.testAsset).then(() => {
      this.popUp.showAlert('Success', 'Data saved successfully =)')
    }).catch((err) =>  {
      this.popUp.showError(err);
    })
  }

}
