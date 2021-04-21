import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fueltransimport',
  templateUrl: './fueltransimport.page.html',
  styleUrls: ['./fueltransimport.page.scss'],
})
export class FueltransimportPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goImportLogTrans()
  {
    this.navCtrl.navigateForward('importlogtransfor');
  }

}
