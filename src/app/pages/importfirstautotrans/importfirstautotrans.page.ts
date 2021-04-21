import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-importfirstautotrans',
  templateUrl: './importfirstautotrans.page.html',
  styleUrls: ['./importfirstautotrans.page.scss'],
})
export class ImportfirstautotransPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goImportGeoTab()
  {
    this.navCtrl.navigateForward('importgeotab');
  }

}
