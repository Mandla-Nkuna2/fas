import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemMakeAndModel from 'src/app/models/supportdata/ItemMakeAndModel.model';

@Component({
  selector: 'app-itemmakemodel',
  templateUrl: './itemmakemodel.page.html',
  styleUrls: ['./itemmakemodel.page.scss'],
})
export class ItemmakemodelPage implements OnInit {
  item: ItemMakeAndModel;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {
    this.item = new ItemMakeAndModel();
  }

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.item, this.item.ItemMakModGuid)
      .then(() => {
        this.popUp.showAlert('Success', 'Data saved successfully =)');
      })
      .catch((err) => {
        this.popUp.showError(err);
      });
  }
  onModify() {}
  onDeActivate() {}
  onClear() {}
}
