import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import ItemType from 'src/app/models/supportdata/ItemType.model';

@Component({
  selector: 'app-itemtype',
  templateUrl: './itemtype.page.html',
  styleUrls: ['./itemtype.page.scss'],
})
export class ItemtypePage implements OnInit {
  itemType: ItemType;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.itemType, this.itemType.ItemTypeGuid)
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
