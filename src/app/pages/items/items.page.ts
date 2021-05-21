import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Item from 'src/app/models/capture/Item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  item: Item

  constructor(private navCtrl: NavController) {
    this.item = new Item()
   }

  ngOnInit() {
  }

  goLossControl()
  {
    this.navCtrl.navigateForward('licensecor');
  }

}
