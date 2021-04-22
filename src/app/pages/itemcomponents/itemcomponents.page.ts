import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import ItemComponent from 'src/app/models/ItemComponent.model';

@Component({
  selector: 'app-itemcomponents',
  templateUrl: './itemcomponents.page.html',
  styleUrls: ['./itemcomponents.page.scss'],
})
export class ItemcomponentsPage implements OnInit {
  itemComponent: ItemComponent

  constructor(private navCtrl: NavController) {
    this.itemComponent = new ItemComponent()
   }

  ngOnInit() {
  }

  goItem()
  {
    this.navCtrl.navigateForward('items');
  }

}
