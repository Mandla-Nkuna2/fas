import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importgeotab',
  templateUrl: './importgeotab.page.html',
  styleUrls: ['./importgeotab.page.scss'],
})
export class ImportgeotabPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  stannicImport()
  {
    this.navCtrl.navigateForward('stannicimport');
  }

}
