import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-importlogtransfor',
  templateUrl: './importlogtransfor.page.html',
  styleUrls: ['./importlogtransfor.page.scss'],
})
export class ImportlogtransforPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goImportAutoFirstTransactions()
  {
    this.navCtrl.navigateForward('importfirstautotrans');
  }

}
