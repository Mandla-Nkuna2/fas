import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-absaimport',
  templateUrl: './absaimport.page.html',
  styleUrls: ['./absaimport.page.scss'],
})
export class AbsaimportPage implements OnInit {
  constructor(private navCtrl: NavController) {}
  currentDate = new Date();

  ngOnInit() {}

  goFTImport() {
    this.navCtrl.navigateForward('fueltransimport');
  }
}
