import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-overheadtrans',
  templateUrl: './overheadtrans.page.html',
  styleUrls: ['./overheadtrans.page.scss'],
})
export class OverheadtransPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goStaffTimeSheet()
  {
    this.navCtrl.navigateForward('stafftimesheets');
  }

}
