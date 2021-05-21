import { Component, OnInit } from '@angular/core';
import { FirebaseGetService } from './../../services/firebase-service/firebase-get.service';
import { PopupHelper } from 'src/app/services/helpers/popup-helper';
import { FirebaseService } from './../../services/firebase-service/firebase-service.service';
import StoreCategory from 'src/app/models/supportdata/StoreCategories.model';

@Component({
  selector: 'app-storecategories',
  templateUrl: './storecategories.page.html',
  styleUrls: ['./storecategories.page.scss'],
})
export class StorecategoriesPage implements OnInit {
  storeCat: StoreCategory;

  constructor(
    private firebaseService: FirebaseService,
    private popUp: PopupHelper,
    private firebaseGetServ: FirebaseGetService,
  ) {}

  ngOnInit() {}

  onAdd() {
    this.firebaseService
      .writeData('myTest', this.storeCat, this.storeCat.StoreCatgGuid)
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
